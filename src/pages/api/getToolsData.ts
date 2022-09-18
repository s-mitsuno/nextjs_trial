// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type ToolsInfoData = {
  title: string;
  imagePath: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ToolsInfoData[]>
) {
  res.status(200).json([
    {
      title: "ホワイトボード",
      imagePath: "/images/freeImage/wb.jpg",
    },
    {
      title: "カンバンボード",
      imagePath: "/images/freeImage/kb.jpg",
    },
    {
      title: "チャットツール",
      imagePath: "/images/freeImage/chat.jpg",
    },
    {
      title: "docker",
      imagePath: "/images/freeImage/dc.jpg",
    },
  ]);
}
