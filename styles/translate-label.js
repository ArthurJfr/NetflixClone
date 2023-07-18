
import Auth from "@/pages/auth"
import Input from "@/components/Input"



    const LabClass = [
        '.email' , 
        '.password',
        '.username'
     ]

export default function Float() {

    for (let i = 0 ; i < LabClass.length ; i++){
           const label = document.querySelector(LabClass[i])
console.log(label)
label.style.transform = 'scale(0.6)'
label.style.top = '-0.15rem'
label.style.left = '1.2rem'


    }

}
 export function unFloat(){
    for (let i = 0 ; i < LabClass.length ; i++){
 const label = document.querySelector(LabClass[i])

    label.style.top = '0.4rem'
    label.style.left = '1.2rem'
        label.style.transform = 'scale(1)'
    }
  }
 