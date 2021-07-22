import { Value } from "slate";
export const initialValue = Value.fromJSON({
    document:{
        nodes:[
            {
                object: "block",
                type: "paragraph",
                nodes: [
                    {
                        object: "text",
                        leaves: [
                            {
                                text: "สวัสดีครับ ยินดีต้อนรับ"
                            }
                        ]
                    }
                ]
            }
        ]
    }
} as any);

// import { Value } from "slate";

// export const initialValue = Value.fromJSON({
//   document: {
//     nodes: [
//       {
//         object: "block",
//         type: "paragraph",
//         nodes: [
//           {
//             object: "text",
//             leaves: [
//               {
//                 text: "A line of text in a paragraph."
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   }
// } as Object);
