import { Schema, models, model } from "mongoose";

// userId, username, role, type, level, techstack, amount

const CourseSchema = new Schema(
  {
    userid: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    techstack: {
      type: [String],
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    questions: {
      type: [String],
      required: true,
    },
    attempted: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Course = models.Course || model("Course", CourseSchema);

export default Course;
