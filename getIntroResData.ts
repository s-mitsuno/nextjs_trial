// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type IntroductionResultsData = {
  title: string;
  imagePath: string;
  description: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IntroductionResultsData[]>
) {
  res.status(200).json([
    {
      title: "RPA",
      imagePath: "/images/freeImage/rpa2.jpg",
      description:
        "RPA（ロボティック・プロセス・オートメーション）を用いて作業の自動化を行う",
    },
    {
      title: "AI",
      imagePath: "/images/freeImage/ai.jpg",
      description: "AI技術を用いて、社内作業の効率化を図る。",
    },
    {
      title: "データサイエンス",
      imagePath: "/images/freeImage/eye.jpg",
      description: "データを分析し、未来予測を行う",
    },
    {
      title: "visualization",
      imagePath: "/images/freeImage/graph.jpg",
      description: "visualization（見える化とは）",
    },
    {
      title: "IOT",
      imagePath: "/images/freeImage/iot2.jpg",
      description: "IOT機器を用い社内の効率化を図る",
    },
    {
      title: "XR(VR/AR/MR)",
      imagePath: "/images/freeImage/vr.jpg",
      description:
        " 仮想現実、拡張現実の可能性を追求していことにより、社内の効率化に繋げる。",
    },
  ]);
}
