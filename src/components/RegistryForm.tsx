// import React, { useRef } from 'react';
// import emailjs from 'emailjs-com';

export const RegistryForm = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
  //     .then((result) => {
  //       console.log(result.text);
  //       alert('Message sent successfully!');
  //     }, (error) => {
  //       console.log(error.text);
  //       alert('Failed to send message, please try again later.');
  //     });

  //   e.target.reset(); // Reset the form after submission
  // };

  return (
    <div className="h-screen flex justify-center items-center " id="Registry">
      <form  className="flex flex-col bg-transparent bg-opacity-80 p-8 rounded-lg shadow-2xl shadow-black ">
        <span className="text-3xl font-Gwendolyn mb-6 font-semibold text-center">Confirma tu asistencia</span>
        <label className="mb-2 font-semibold">
          Nombre y Apellido:
          <input
            type="text"
            name="name"
            placeholder="Nombre y apellido"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </label>
        <div className="mb-6">
          <span className="font-semibold">Vas a asistir?</span>
          <label className="flex items-center mt-2">
            <input type="radio" name="attending" value="Yes" className="mr-2" required />
            Sí, voy a asistir.
          </label>
          <label className="flex items-center mt-2">
            <input type="radio" name="attending" value="No" className="mr-2" required />
            Lo siento, no voy a poder asistir.
          </label>
        </div>
        <label className="mb-2 font-semibold">
          Cantidad de asistentes:
          <input
            type="number"
            name="attendees"
            placeholder="Cantidad de asistentes"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </label>
        <label className="mb-4 font-semibold">
          Dejale un mensaje a la pareja:
          <textarea
            name="message"
            placeholder="Deja un mensaje"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full h-32"
            required
          ></textarea>
        </label>
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
