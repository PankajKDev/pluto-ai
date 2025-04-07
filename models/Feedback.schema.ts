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
      type: String,
    },
    categoryScore: {
      type: String,
    },
    areasForImprovement: {
      type: String,
    },
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
