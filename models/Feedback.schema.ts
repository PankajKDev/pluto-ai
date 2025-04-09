import { Schema, models, model } from "mongoose";
const FeedbackSchema = new Schema(
  {
    interviewId: {
      type: String,
      required: true,
    },
    interviewName: {
      type: String,
      required: true,
    },
    userid: {
      type: String,
      required: true,
    },
    totalScore: {
      type: Number,
    },
    categoryScores: [
      {
        name: String,
        score: Number,
        comment: String,
      },
    ],
    strengths: [{ type: String }],
    areasForImprovement: [{ type: String }],
    finalAssessment: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Feedback = models.Feedback || model("Feedback", FeedbackSchema);

export default Feedback;
