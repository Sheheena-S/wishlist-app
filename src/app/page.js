import AddTask from '@/components/AddTask';

import TaskList from '@/components/TaskList';

import { TasksProvider } from '@/components/TasksContext';
 
export default function TaskApp() {

  return (
<TasksProvider>
<h1 style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '16px' }}>

        Day off in Kyoto
</h1>
<AddTask />
<TaskList />
</TasksProvider>

  );

}

 