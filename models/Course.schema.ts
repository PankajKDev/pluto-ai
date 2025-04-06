import { Schema, models, model } from "mongoose";
const CourseSchema = new Schema(
  {
    userid: {
      type: String,
      required: true,
    },
    role: {
      type: String,
    },
    level: {
      type: String,
    },
    techstack: {
      type: [String],
    },
    amount: {
      type: Number,
    },
    questions: {
      type: [String],
    },
    attempted: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const Course = models.Course || model("Course", CourseSchema);

export default Course;
