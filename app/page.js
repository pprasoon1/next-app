'use client'
import Todo from "@/Components/Todo";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  })
  const [todoData, setTodoData] = useState([]);

  const fetchTodos = async() => {
    const response = await axios('/api')
    setTodoData(response.data.todos)
  }

  const deleteTodo = async(id) => {
    const response = await axios.delete('/api', {
      params: {
        mongoId: id
      }
    })
    toast.success(response.data.msg);
    fetchTodos();
  }

  const completeTodo = async (id) => {
    const response = await axios.put('/api', {}, {
      params: {
        mongoId: id
      }
    })
    toast.success(response.data.msg);
    fetchTodos();
  }

  useEffect(() => {
    fetchTodos();
  }, [])

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(form => ({...form, [name]: value}))
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('/api', formData)
      toast.success(response.data.msg)

      setFormData({
        title: "",
        description: "",
      });
      await fetchTodos();

    } catch (error) {
      toast.error('Error')
    }
  }

  return (
    <>
      <ToastContainer theme="dark" />
      
      {/* Form Section */}
      <form onSubmit={onSubmitHandler} className="flex items-start flex-col gap-2 w-[90%] sm:w-[80%] lg:w-[60%] max-w-[600px] mt-12 px-4 mx-auto">
        <input 
          value={formData.title} 
          onChange={onChangeHandler} 
          type="text" 
          name="title" 
          placeholder="Title" 
          className="px-3 py-2 border-2 w-full" 
        />
        <textarea 
          value={formData.description} 
          onChange={onChangeHandler} 
          name="description" 
          placeholder="Description" 
          className="px-3 py-2 border-2 w-full" 
        />
        <button 
          type="submit" 
          className="px-11 py-3 bg-orange-600 text-white w-full sm:w-auto"
        >
          Add Todo
        </button>
      </form>

      {/* Todo Table Section */}
      <div className="relative overflow-x-auto mt-12 w-[90%] sm:w-[80%] lg:w-[60%] mx-auto">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-4 py-3">Id</th>
              <th scope="col" className="px-4 py-3">Title</th>
              <th scope="col" className="px-4 py-3">Description</th>
              <th scope="col" className="px-4 py-3">Status</th>
              <th scope="col" className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {todoData.map((item, index) => {
              return (
                <Todo
                  key={index}
                  id={index}
                  title={item.title}
                  description={item.description}
                  complete={item.isCompleted}
                  mongoId={item._id}
                  deleteTodo={deleteTodo}
                  completeTodo={completeTodo}
                />
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
