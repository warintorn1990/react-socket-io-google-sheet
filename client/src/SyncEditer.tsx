import React, { useRef, useState, useEffect } from "react";

import { Editor } from "slate-react";
import { initialValue } from "./initValueEditer";

interface Props {}

export const SyncEditer: React.FC<Props> = () => {
  const [value, setValue] = useState(initialValue);
  const id = useRef(`${Date.now()}`);
  const editor = useRef<Editor | null>(null);
  const remote = useRef(false);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-6">
          <Editor
            ref={editor}
            style={{
              backgroundColor: "#fafafa",
              maxWidth: 800,
              minHeight: 500,
              justifyContent: "center",
            }}
            value={value}
            onChange={(opt) => {
              setValue(opt.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SyncEditer;
