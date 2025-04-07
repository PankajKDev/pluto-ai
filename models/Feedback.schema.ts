import { Schema, models, model } from "mongoose";
const FeedbackSchema = new Schema(
  {
    interviewId: {
      type: String,
    },
    userid: {
      type: String,
    },
    totalScore: {
      type: Number,
    },
    categoryScore: [
      {
        name: String,
        score: Number,
        comment: String,
      },
    ],
    strengths: [{ type: String }],
    areasForImprovement: [{ type: String }],
    finalAssesment: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Feedback = models.Feedback || model("Feedback", FeedbackSchema);

export default Feedback;
