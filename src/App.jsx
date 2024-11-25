// import { useState } from "react";
// import "./App.css";
// import Header from "./components/Header/index.jsx";
// import Instagram from "./images/instagram-logo.svg";
// import Github from "./images/github.svg";
// import Facebook from "./images/facebook.svg";
// import Telegram from "./images/telegram.svg";

// function App() {
//   const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   const [phone, setPhone] = useState();
//   const [country, setCountry] = useState();
//   const [city, setCity] = useState();
//   const [address, setAddress] = useState();
//   const [countEmployers, setCountEmployers] = useState();
//   const [description, setDescription] = useState();

//   function validateCompanyName(companyName) {
//     // 1. Belgilar soni kamida 4 va ko'pi bilan 30 ta bo'lishi kerak
//     if (companyName.length < 4 || companyName.length > 30) {
//       return false;
//     }

//     // 2. Yozuv raqam bilan boshlanmasligi kerak
//     if (/^\d/.test(companyName)) {
//       return false;
//     }

//     // 3. Faqat ruxsat etilgan belgilar "_" "-" "&" bo'lishi kerak
//     if (/[^a-zA-Z0-9_\-&]/.test(companyName)) {
//       return false;
//     }

//     return true;
//   }

//   function validateEmail(email) {
//     // 1. Belgilar soni kamida 13 va ko'pi bilan 20 bo'lishi kerak
//     if (email.length < 13 || email.length > 20) {
//       return false;
//     }

//     // 2. Yozuv oxiri "@gmail.com" bilan tugashi kerak
//     if (!email.endsWith("@gmail.com")) {
//       return false;
//     }

//     return true;
//   }

//   function validatePhoneNumber(phoneNumber) {
//     // 1. Probelni olib tashlash
//     phoneNumber = phoneNumber.replace(/\s+/g, "");

//     // 2. Yozuv faqat raqamlardan iborat bo'lishi kerak
//     if (!/^\d+$/.test(phoneNumber)) {
//       return false;
//     }

//     // 3. Yozuv "+998" bilan boshlanishi kerak
//     if (!phoneNumber.startsWith("998")) {
//       return false;
//     }

//     // 4. Yozuv uzunligi 13 ta bo'lishi kerak
//     if (phoneNumber.length !== 13) {
//       return false;
//     }

//     return true;
//   }

//   function validateSelect(selectElement) {
//     // 1. Tanlangan option "davlat" bo'lmasligi kerak va tanlangan bo'lishi shart
//     if (selectElement.value === "" || selectElement.value === "davlat") {
//       return false;
//     }
//     return true;
//   }

//   function validateCitySelect(selectElement) {
//     // 1. Tanlangan option "shahar" bo'lmasligi kerak va tanlangan bo'lishi shart
//     if (selectElement.value === "" || selectElement.value === "shahar") {
//       return false;
//     }
//     return true;
//   }

//   function validateAddress(address) {
//     // 1. Yozuv 10ta belgidan kam bo'lmasligi kerak
//     if (address.length < 10) {
//       return false;
//     }

//     // 2. Yozuv 50ta belgidan ko'p bo'lmasligi kerak
//     if (address.length > 50) {
//       return false;
//     }

//     // 3. Faqat ",", ".", va "/" belgilarini ishlatish mumkin
//     if (/[^a-zA-Z0-9,./ ]/.test(address)) {
//       return false;
//     }

//     return true;
//   }

//   function validateNumberOfWorkers(number) {
//     // 1. Number 5dan kam bo'lmasligi kerak
//     if (number < 5) {
//       return false;
//     }

//     return true;
//   }

//   function validateComment(comment) {
//     // 1. Yozuv 10ta belgidan kam bo'lmasligi kerak
//     if (comment.length < 10) {
//       return false;
//     }

//     return true;
//   }

//   function validate() {
//     if (!validateCompanyName(name)) {
//       alert("Name is not valid");
//       return false;
//     }

//     if (!validateEmail(email)) {
//       alert("Email hato berilgan");
//       return false;
//     }

//     if (!validatePhoneNumber(phone)) {
//       alert("Telefon Raqami Notog'ri");
//       return false;
//     }

//     if (!validateSelect(country)) {
//       alert("Davlat Tanlanmagan");
//       return false;
//     }

//     if (!validateCitySelect(city)) {
//       alert("Shahar Kiritilmagan");
//       return false;
//     }

//     if (validateAddress(address)) {
//       alert("Adres notog'ri");
//       return false;
//     }

//     if (!validateNumberOfWorkers(countEmployers)) {
//       alert("Hodimlar soni hato");
//       return false;
//     }

//     if (validateComment(description)) {
//       alert("Izoh Notog'ri");
//       return false;
//     }

//     return true;
//   }

//   const [modalOpen, setModalOpen] = useState(false);
//   const [link, setLink] = useState("");

//   const openModal = () => {
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   const handleLinkChange = (e) => {
//     setLink(e.target.value);
//   };
//   function handleSubmit(event) {
//     event.preventDefault();
//     const isValid = validate();
//     if (!isValid) {
//       return;
//     }
//   }
//   return (
//     <div>
//       <Header></Header>
//       <div className="container">
//         <div className="form-wrapper">
//           <div className="company-laws">
//             <h1>Kompaniya ma’lumotlari</h1>
//             <p>Kompaniya haqidagi ma’lumotlarni kiriting</p>
//           </div>
//           <form onSubmit={handleSubmit}>
//             <label className="company" htmlFor="companyName">
//               Kompaniya nomi *
//               <input
//                 id="companyName"
//                 value={name}
//                 onChange={(e) => {
//                   setName(name.target.value);
//                 }}
//                 placeholder="Kompaniya nomi"
//                 class="input-style"
//                 type="text"
//               />
//             </label>
//             <p className="email"></p>
//             <label htmlFor="email">
//               Email *
//               <input
//                 id="email"
//                 placeholder="Kompaniya nomi"
//                 value={email}
//                 onChange={(e) => {
//                   setEmail(email.target.value);
//                 }}
//                 class="input-style"
//                 type="email"
//               />
//             </label>
//             <p className="email"></p>
//             <label className="phoneNumber" htmlFor="phone">
//               Telefon raqami *
//               <input
//                 required
//                 id="phone"
//                 placeholder="UZ +9989"
//                 class="input-style"
//                 value={phone}
//                 onChange={(e) => {
//                   setPhone(phone.target.value);
//                 }}
//                 type="tel"
//               />
//             </label>
//             <div className="social-links">
//               <h2>Linklar *</h2>
//               <div className="icons">
//                 <img src={Instagram} alt="World" onClick={openModal} />
//                 <img src={Telegram} alt="Instagram" onClick={openModal} />
//                 <img src={Facebook} alt="Telegram" onClick={openModal} />
//                 <img src={Github} alt="Facebook" onClick={openModal} />
//               </div>
//             </div>
//             {modalOpen && (
//               <div className="modal">
//                 <div className="modal-content">
//                   <span className="close-btn" onClick={closeModal}>
//                     &times;
//                   </span>
//                   <h2>URL manzilingizni kiriting:</h2>
//                   <input
//                     type="url"
//                     value={link}
//                     onChange={handleLinkChange}
//                     placeholder="URLni kiriting"
//                   />
//                   <button onClick={closeModal}>SAQLASH</button>
//                 </div>
//               </div>
//             )}
//             <div className="selects">
//               <div className="country-select">
//                 <p className="country">Davlat*</p>
//                 <select
//                   className="select-country"
//                   value={country}
//                   onChange={(e) => {
//                     setCountry(country.target.value);
//                   }}
//                 >
//                   <option value="default">Davlat</option>
//                   <option value="uzbek">Uzbekistan</option>
//                   <option value="russia">Russia</option>
//                   <option value="english">English</option>
//                 </select>
//               </div>
//               <div className="city-select">
//                 <p className="country">Shahar*</p>
//                 <select
//                   className="select-country"
//                   value={city}
//                   onChange={(e) => {
//                     setCity(city.target.value);
//                   }}
//                 >
//                   <option value="default">Shahar</option>
//                   <option value="tashkent">Tashkent</option>
//                   <option value="russia">Moscow</option>
//                   <option value="washington">Washington</option>
//                 </select>
//               </div>
//             </div>

//             <label className="location-live" htmlFor="location">
//               Yashash joyi*
//               <input
//                 type="text"
//                 placeholder="Joy"
//                 value={address}
//                 onChange={(e) => {
//                   setAddress(address.target.value);
//                 }}
//                 id="location"
//               />
//             </label>
//             <br />
//             <label className="employer" htmlFor="employeers">
//               Hodimlar soni *
//               <input
//                 type="number"
//                 placeholder="Hodimlar soni"
//                 value={countEmployers}
//                 onChange={(e) => {
//                   setCountEmployers(countEmployers.target.value);
//                 }}
//                 id="employeers"
//               />
//             </label>
//             <label htmlFor="desc">
//               Izoh*
//               <textarea
//                 id="desc"
//                 value={description}
//                 onChange={(e) => {
//                   setDescription(description.target.value);
//                 }}
//                 placeholder="Kompaniya haqida izoh qoldiring"
//               ></textarea>
//             </label>
//             <button id="saqlash-tugma">SAQLASH</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";
import Header from "./components/Header/index.jsx";
import Instagram from "./images/instagram-logo.svg";
import Github from "./images/github.svg";
import Facebook from "./images/facebook.svg";
import Telegram from "./images/telegram.svg";

function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [address, setAddress] = useState();
  const [countEmployers, setCountEmployers] = useState();
  const [description, setDescription] = useState();

  const [submittedData, setSubmittedData] = useState(null); // Yangi state qo'shildi

  function validateCompanyName(companyName) {
    if (companyName.length < 4 || companyName.length > 30) {
      return false;
    }
    if (/^\d/.test(companyName)) {
      return false;
    }
    if (/[^a-zA-Z0-9_\-&]/.test(companyName)) {
      return false;
    }
    return true;
  }

  function validateEmail(email) {
    if (email.length < 10 || email.length > 30) {
      return false;
    }
    if (!email.endsWith("@gmail.com")) {
      return false;
    }
    return true;
  }

  function validatePhoneNumber(phoneNumber) {
    phoneNumber = phoneNumber.replace(/\s+/g, "");
    if (!/^\d+$/.test(phoneNumber)) {
      return false;
    }
    if (!phoneNumber.startsWith("+998")) {
      return false;
    }
    if (phoneNumber.length !== 17) {
      return false;
    }
    return true;
  }

  function validateSelect(selectElement) {
    if (selectElement.value === "" || selectElement.value === "davlat") {
      return false;
    }
    return true;
  }

  function validateCitySelect(selectElement) {
    if (selectElement.value === "" || selectElement.value === "shahar") {
      return false;
    }
    return true;
  }

  function validateAddress(address) {
    if (address.length < 10) {
      return false;
    }
    if (address.length > 50) {
      return false;
    }
    if (/[^a-zA-Z0-9,./ ]/.test(address)) {
      return false;
    }
    return true;
  }

  function validateNumberOfWorkers(number) {
    if (number < 5) {
      return false;
    }
    return true;
  }

  function validateComment(comment) {
    if (comment.length < 10) {
      return false;
    }
    return true;
  }

  function validate() {
    if (!validateCompanyName(name)) {
      alert("Name is not valid");
      return false;
    }
    if (!validateEmail(email)) {
      alert("Email hato berilgan");
      return false;
    }
    if (validatePhoneNumber(phone)) {
      alert("Telefon Raqami Notog'ri");
      return false;
    }
    if (!validateSelect(country)) {
      alert("Davlat Tanlanmagan");
      return false;
    }
    if (!validateCitySelect(city)) {
      alert("Shahar Kiritilmagan");
      return false;
    }
    if (!validateAddress(address)) {
      alert("Adres notog'ri");
      return false;
    }
    if (!validateNumberOfWorkers(countEmployers)) {
      alert("Hodimlar soni hato");
      return false;
    }
    if (!validateComment(description)) {
      alert("Izoh Notog'ri");
      return false;
    }
    return true;
  }

  const [modalOpen, setModalOpen] = useState(false);
  const [link, setLink] = useState("");

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    const isValid = validate();
    if (!isValid) {
      return;
    }
    // Formani yuborganingizda, ma'lumotlarni `submittedData` state'iga saqlaymiz
    setSubmittedData({
      name,
      email,
      phone,
      country,
      city,
      address,
      countEmployers,
      description,
    });
  }

  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="form-wrapper">
          <div className="company-laws">
            <h1>Kompaniya ma’lumotlari</h1>
            <p>Kompaniya haqidagi ma’lumotlarni kiriting</p>
          </div>
          <form onSubmit={handleSubmit}>
            <label className="company" htmlFor="companyName">
              Kompaniya nomi *
              <input
                id="companyName"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Kompaniya nomi"
                class="input-style"
                type="text"
              />
            </label>
            <p className="email"></p>
            <label htmlFor="email">
              Email *
              <input
                id="email"
                placeholder="Kompaniya nomi"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                class="input-style"
                type="email"
              />
            </label>
            <p className="email"></p>
            <label className="phoneNumber" htmlFor="phone">
              Telefon raqami *
              <input
                required
                id="phone"
                placeholder="UZ +9989"
                class="input-style"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                type="tel"
              />
            </label>
            <div className="social-links">
              <h2>Linklar *</h2>
              <div className="icons">
                <img src={Instagram} alt="Instagram" onClick={openModal} />
                <img src={Telegram} alt="Telegram" onClick={openModal} />
                <img src={Facebook} alt="Facebook" onClick={openModal} />
                <img src={Github} alt="Github" onClick={openModal} />
              </div>
            </div>
            {modalOpen && (
              <div className="modal">
                <div className="modal-content">
                  <span className="close-btn" onClick={closeModal}>
                    &times;
                  </span>
                  <h2>URL manzilingizni kiriting:</h2>
                  <input
                    type="url"
                    value={link}
                    onChange={handleLinkChange}
                    placeholder="URLni kiriting"
                  />
                  <button onClick={closeModal}>SAQLASH</button>
                </div>
              </div>
            )}
            <div className="selects">
              <div className="country-select">
                <p className="country">Davlat*</p>
                <select
                  className="select-country"
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                >
                  <option value="default">Davlat</option>
                  <option value="uzbek">Uzbekistan</option>
                  <option value="russia">Russia</option>
                  <option value="english">English</option>
                </select>
              </div>
              <div className="city-select">
                <p className="country">Shahar*</p>
                <select
                  className="select-country"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                >
                  <option value="default">Shahar</option>
                  <option value="tashkent">Tashkent</option>
                  <option value="russia">Moscow</option>
                  <option value="washington">Washington</option>
                </select>
              </div>
            </div>

            <label className="location-live" htmlFor="location">
              Yashash joyi*
              <input
                type="text"
                placeholder="Joy"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                id="location"
              />
            </label>
            <br />
            <label className="employer" htmlFor="employeers">
              Hodimlar soni *
              <input
                type="number"
                placeholder="Hodimlar soni"
                value={countEmployers}
                onChange={(e) => {
                  setCountEmployers(e.target.value);
                }}
                id="employeers"
              />
            </label>
            <label htmlFor="desc">
              Izoh*
              <textarea
                id="desc"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                placeholder="Kompaniya haqida izoh"
              />
            </label>
            <br />
            <div className="btn-container">
              <button className="submit-btn" type="submit">
                Yuborish
              </button>
            </div>
          </form>

          {/* Formani yuborganingizda ma'lumotlarni ko'rsatamiz */}
          {submittedData && (
            <div className="card-container">
              <div className="card">
                <h3>Kompaniya ma'lumotlari</h3>
                <p>
                  <strong>Kompaniya nomi:</strong> {submittedData.name}
                </p>
                <p>
                  <strong>Email:</strong> {submittedData.email}
                </p>
                <p>
                  <strong>Telefon:</strong> {submittedData.phone}
                </p>
                <p>
                  <strong>Davlat:</strong> {submittedData.country}
                </p>
                <p>
                  <strong>Shahar:</strong> {submittedData.city}
                </p>
                <p>
                  <strong>Yashash joyi:</strong> {submittedData.address}
                </p>
                <p>
                  <strong>Hodimlar soni:</strong> {submittedData.countEmployers}
                </p>
                <p>
                  <strong>Izoh:</strong> {submittedData.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
