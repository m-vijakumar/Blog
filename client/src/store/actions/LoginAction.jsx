export const handleSubmit = (e,data)=>{

    e.persist();
    return async dispatch =>{
        try {
            const response = await fetch('/auth/login' , {
                method: "POST",
                headers: {
                  'Content-type': 'application/json'
            
                },
                mode:'cors',
                body :JSON.stringify({data})
              })
              const data2 = await response.json();
              console.log(data2)
              dispatch({type:"LOGIN_SUBMIT",e,data2})

        } catch (error) {
            console.log(err)
        }
    }
}