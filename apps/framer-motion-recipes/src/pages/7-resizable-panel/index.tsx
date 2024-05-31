import { useState } from "react";
import { delay, Form } from "@/components/7-resizable-panel/Form";

export default function ResizablePanel() {
  let [status, setStatus] = useState("idle");

  return (
    <div className="flex min-h-screen flex-col items-start bg-zinc-900 pt-28">
      <div className="mx-auto w-full max-w-md">
        <div className="rounded-2xl border border-zinc-700 bg-zinc-800">
          <div className="px-8 pt-8">
            <p className="text-lg text-white">Reset password</p>
          </div>

          {status === "idle" || status === "saving" ? (
            <div>
              <Form
                onSubmit={async () => await delay(1000)}
                afterSave={() => setStatus("success")}
                className="p-8"
              >
                <p className="text-sm text-zinc-400">
                  Enter your email to get a password reset link:
                </p>
                <div className="mt-3">
                  <input
                    className="block w-full rounded border-none text-slate-900"
                    type="email"
                    required
                    defaultValue="sam@buildui.com"
                  />
                </div>
                <div className="mt-8 text-right">
                  <Form.Button className="rounded bg-indigo-500 px-5 py-2 text-sm font-medium text-white ">
                    Email me my link
                  </Form.Button>
                </div>
              </Form>
            </div>
          ) : (
            <p className="p-8 text-sm text-zinc-400">
              Email sent! Check your inbox to continue.
            </p>
          )}
        </div>

        <p className="mt-8 text-sm text-zinc-500">
          <span className="underline">Reach out</span> to us if you need more
          help.
        </p>
      </div>
    </div>
  );
}


