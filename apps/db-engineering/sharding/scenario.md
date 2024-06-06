Q: "You have a big database with a billion rows. Your database is very slow, there is no performance problem in the backend though. How would you improve the database performance? What is your thought process?"

<!-- https://helpful-spatula-100.notion.site/Database-53a1297f173d45b5bd09151766854bb3?pvs=4 -->

Answer:

### Step 1: Clarification Questions

1. **Nature of Queries**: What types of queries are most common (e.g., read-heavy, write-heavy, analytical, transactional)?
2. **Current Indexing**: What indexes currently exist? Are there any missing indexes for commonly queried columns?
3. **Table Structure**: What is the schema of the table(s) in question? Are there any normalization or denormalization issues?
4. **Hardware and Configuration**: What are the hardware specifications and current database configuration settings?
5. **Database Engine**: What database management system (DBMS) is being used (e.g., PostgreSQL, MySQL, MongoDB)?
6. **Concurrency**: How many concurrent users/queries does the database typically handle?
7. **Data Distribution**: Is the data distribution uniform, or are there any hotspots?

### Step 2: Answering Clarification Questions

1. **Nature of Queries**: The database is read-heavy with occasional writes.
2. **Current Indexing**: Only basic indexing on primary keys.
3. **Table Structure**: The main table has many columns, with some being rarely used.
4. **Hardware and Configuration**: The server has sufficient RAM and CPU but no SSD storage.
5. **Database Engine**: PostgreSQL.
6. **Concurrency**: Handles hundreds of concurrent users.
7. **Data Distribution**: Data is uniformly distributed but some queries involve large range scans.

### Step 3: Solution Approach

1. **Indexing**:
   - **Create Indexes**: Identify and create indexes on columns frequently used in WHERE clauses, JOINs, and ORDER BY clauses. For example, if queries often filter by `date`, create an index on the `date` column.
     ```sql
     CREATE INDEX idx_date ON main_table (date);
     CREATE INDEX idx_user_id ON main_table (user_id);
     ```
   - **Covering Indexes**: For frequently accessed queries, create covering indexes that include all columns referenced in the query.
     ```sql
     CREATE INDEX idx_user_date ON main_table (user_id, date) INCLUDE (status, amount);
     ```
2. **Query Optimization**:
   - **Analyze Queries**: Use the `EXPLAIN` command to understand query execution plans and identify bottlenecks.
     ```sql
     EXPLAIN ANALYZE SELECT * FROM main_table WHERE user_id = 123 AND date > '2023-01-01';
     ```
   - **Optimize Queries**: Rewrite inefficient queries to take advantage of indexes and reduce the amount of data processed.
3. **Table Structure**:
   - **Normalization**: Ensure the table is normalized to reduce redundancy and improve performance.
   - **Denormalization**: Consider selective denormalization for read-heavy tables to reduce JOIN operations.
4. **Partitioning**:

   - **Range Partitioning**: Implement range partitioning on the `date` column to limit the amount of data scanned in queries.

     ```sql
     CREATE TABLE main_table (
       id SERIAL PRIMARY KEY,
       user_id INT,
       date DATE,
       status VARCHAR(50),
       amount DECIMAL
     ) PARTITION BY RANGE (date);

     CREATE TABLE main_table_2023 PARTITION OF main_table FOR VALUES FROM ('2023-01-01') TO ('2024-01-01');
     CREATE TABLE main_table_2022 PARTITION OF main_table FOR VALUES FROM ('2022-01-01') TO ('2023-01-01');
     ```

5. **Materialized Views**:
   - **Create Materialized Views**: For frequently executed complex queries, create materialized views to store precomputed results.
     ```sql
     CREATE MATERIALIZED VIEW mv_user_summary AS
     SELECT user_id, COUNT(*) AS total_orders, SUM(amount) AS total_amount
     FROM main_table
     GROUP BY user_id;
     ```
6. **Hardware and Configuration**:
   - **Upgrade Storage**: Move to SSD storage to improve I/O performance.
   - **Increase Memory**: Ensure there is enough RAM to cache frequently accessed data.
   - **Database Configuration**: Tune PostgreSQL configuration settings like `shared_buffers`, `work_mem`, and `maintenance_work_mem`.
7. **Sharding**:
   - **Implement Sharding**: If the database performance still needs improvement after indexing, partitioning, and optimizing, consider sharding.
     - **Identify Sharding Key**: Choose an appropriate sharding key (e.g., `user_id`) to distribute data across multiple shards.
     - **Distribute Shards**: Deploy each shard on a separate database server or instance to distribute load.
     - **Query Routing**: Implement a query router or use middleware to direct queries to the appropriate shard based on the sharding key.

### Final Solution Implementation

By following these steps, the database performance can be significantly improved. The process involves creating necessary indexes, optimizing queries, partitioning the table, and potentially implementing sharding if required. This structured approach ensures that the performance issues are addressed systematically and efficiently.
