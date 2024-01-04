import { useState } from "react";
import { CourseGoal } from "./components/CourseGoal.tsx";
import Header from "./components/Header.tsx";
import headerImg from "/goals.jpg";
import CourseGoalList from "./components/CourseGoalList.tsx";
import NewGoal from "./components/NewGoal.tsx";
import Warning from "./components/Warning.tsx";

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  const [warning, setWarning] = useState<string | null>(null);

  function handleAddClick(goalTitle: string, goalDescription: string) {
    const findDuplicateGoal = goals.filter(
      (goal) => goal.title.toLowerCase() === goalTitle.toLowerCase()
    );

    console.log(findDuplicateGoal);

    if (findDuplicateGoal.length >= 1) {
      setWarning(
        `A goal with title ${goalTitle} already exists, add a goal having different title !`
      );
      return;
    }

    // Goal added is having a unique title
    else {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goalTitle,
        description: goalDescription,
      };

      setWarning(null);
      setGoals((prevGoals) => {
        return [...prevGoals, newGoal];
      });
    }
  }

  function handleDeleteGoal(goalId: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== goalId));
  }

  return (
    <main>
      {/* Header  */}
      <Header
        image={{
          src: headerImg,
          alt: "Header Image",
        }}
      >
        Mastering Typescript with React
      </Header>

      {/* Add new goal Form */}
      <NewGoal handleAddGoal={handleAddClick} />

      {/* Course Goals List */}
      <CourseGoalList goals={goals} handleDelete={handleDeleteGoal} />

      <Warning warning={warning} />
    </main>
  );
}
