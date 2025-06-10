import { useState } from 'react'
import { useForm } from 'react-hook-form'


function App() {
  const [count, setCount] = useState(0)
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors,isSubmitting },
    watch,
  } = useForm();
  // const delay = (d)=>{
  //   return new Promise((resolve,reject)=>{
  //     setTimeout(() => {
  //       resolve()
  //     }, d*1000);
  //   })
  // }
  const onSubmit = async(data) =>{ 
    // await delay(2) //simulating network delay
    // console.log(data)
    // if(data.username!=="Vicky")
    // {
    //   setError("myform", {message : "this is not correct form as username does not match"})
    // }
    let r = await fetch("http://localhost:3000/",{method :"POST",headers:{"Content-Type": "application/json"},body :JSON.stringify(data)})
    let res = await r.text()
    console.log(data,res)
  }
  return (
    <>
    {isSubmitting&&<div>loading....</div>}
      <div className="main">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder='username' {...register("username", { required: { value: true, message: "this feild is required" }, minLength: { value: 4, message: "min length is 4" }, maxLength: { value: 10, message: "max value is 10" } })} />{errors.username &&
            <div>{errors.username.message}</div>}
          <input type="password" placeholder='password' {...register("password", { required: {value:true,message:"feild required"}, minLength: {value:4,message:"min length is 4"}, maxLength: {value:10,message:"maxlength is 10"} })} /> {errors.password && 
          <div className="pass">{errors.password.message}</div>}
          <input disabled={isSubmitting} type="submit" value="submit" />
          {errors.myform && <div>{errors.myform.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App
