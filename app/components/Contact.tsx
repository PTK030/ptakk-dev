"use client"
import React, {FormEvent} from 'react'
import {NextFont} from "next/dist/compiled/@next/font";
import {Poppins} from "next/font/google";
import {useState} from "react";
import {NextRouter, useRouter} from "next/navigation";
const poppins: NextFont = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
const Contact = () => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const router: NextRouter = useRouter()
    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name || !email || !message) {
            alert("Zostawiłeś puste pola!");
            return false;
        } else {
            return true;
        }
    }
  return (
    <section className='contact' id='contact'>
        <div className="contact_headingbox">
            <h2 className="contact_headingbox-heading">Kontakt</h2>
        </div>
        <p className="contact_description">Napisz do mnie szybko przez formularz lub ręcznie: xkamilptx@gmail.com</p>
        <div className="contact_content">
            <form action="https://getform.io/f/c1e6c263-fdf3-4007-9e9d-56cfdc240954" method="POST">
                <input type="text" name="name" id="name" placeholder='Imię i nazwisko' className={poppins.className} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
                <input type="email" name="email" id="email" placeholder='Adres email' className={poppins.className} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
                <textarea name="message" id="message" placeholder='Wiadomość' className={poppins.className} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}/>
                <button type="submit" className={poppins.className}>wyślij wiadomość</button>
            </form>
        </div>
    </section>
  )
}

export default Contact