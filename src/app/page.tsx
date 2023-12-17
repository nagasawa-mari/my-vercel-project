import { FormEvent, useState } from "react";

type Task = {
  id: number;
  title: string;
  end_date: string;
  done: boolean;
};

const demoTasks: Task[] = [
  {
    id: 1,
    title: "牛乳を買う",
    end_date: "2021-05-31",
    done: false,
  },
  {
    id: 2,
    title: "本を読む",
    end_date: "2021-06-30",
    done: true,
  },
  {
    id: 3,
    title: "ゴミを出す",
    end_date: "2021-06-30",
    done: true,
  },
];

export default function Page() {
  const [tasks, setTasks] = useState<Task[]>(demoTasks);

  function addTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const title = formData.get("title") as string;
    const endDate = formData.get("end_date") as string;

    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        title: title,
        end_date: endDate,
        done: false,
      },
    ]);
  }

  return (
    <div className="p-8">
      <h1 className="mb-4">ToDo管理アプリ</h1>

      <form className="mb-8 space-x-4" onSubmit={addTask}>
        <input type="text" name="title" />
        <input type="date" name="end_date" />
        <input type="submit" value="Submit" />
      </form>

      {tasks.map((item) => (
        <div key={item.id} className="flex gap-4">
          <input
            type="checkbox"
            defaultChecked={item.done}
            onChange={() => console.log("submit")}
          />
          <span>{item.title}</span>
          <span>{item.end_date}</span>
        </div>
      ))}
    </div>
  );
}
