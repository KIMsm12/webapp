import MyCheckbox from './MyCheckbox';
import Counter from './Counter';
import MyInput from './MyInput';
import Form from './Form';

export default function App() {
  return (
    <div>
      <MyCheckbox label="I liked this" />
      <MyCheckbox label="I shared this" />
      <Counter label="You pressed me" />
      <MyInput initialValue="hello" />
      <Form initialName="Taylor" initialAge={42} />
    </div>
  );
}