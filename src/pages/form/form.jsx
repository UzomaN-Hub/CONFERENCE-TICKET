import React, { useState, useRef } from 'react';
import './form.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-full.svg';
import bgsvg from '../../assets/pattern-lines.svg';
import { CiCircleInfo } from "react-icons/ci";
import circle from '../../assets/pattern-circle.svg';
import desktopT from '../../assets/pattern-squiggly-line-top.svg';
import desktopB from '../../assets/pattern-squiggly-line-bottom-desktop.svg';
import upload from '../../assets/icon-upload.svg';

const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    github: '',
    avatar: null
  });

  const [errors, setErrors] = useState({});
  const errorRef = useRef(null);

  const validate = () => {
    let newErrors = {};

    if (!formData.avatar) {
      newErrors.avatar = "Avatar is required";
    } else {
      const allowedTypes = ['image/jpeg', 'image/png'];
      if (!allowedTypes.includes(formData.avatar.type)) {
        newErrors.avatar = "Only JPG or PNG allowed";
      } else if (formData.avatar.size > 512000) {
        newErrors.avatar = "Image must be less than 500KB";
      }
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.github.trim()) {
      newErrors.github = "GitHub username is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, avatar: file }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/ticket');
    } else {
      errorRef.current?.focus();
    }
  };

  return (
    <main>
      <img className='lines' src={bgsvg} alt="" />
      <img className='top-desktop' src={desktopT} alt="" />
      <img className='bottom-desktop' src={desktopB} alt="" />

      <header>
        <img src={logo} alt="Conference Logo" />
      </header>

      <caption>
        <h1>Your Journey to Coding Conf <br /> 2025 Starts Here!</h1>
        <p>Secure your spot at the next year's biggest coding conference</p>
      </caption>

      <form onSubmit={handleSubmit} noValidate aria-describedby="form-errors">
        <div className="form-action-1">
          <label htmlFor="upload">Upload Avatar</label>
          <img className='upload-icon' src={upload} alt="" />
          <input
            type="file"
            id="upload"
            accept="image/png, image/jpeg"
            onChange={handleFileChange}
            aria-describedby={errors.avatar ? "avatar-error" : "avatar-hint"}
          />
          <p id="avatar-hint"><CiCircleInfo /> Upload your photo (JPG OR PNG, max size: 500KB).</p>
          {errors.avatar && <p id="avatar-error" role="alert" style={{ color: 'red' }}>{errors.avatar}</p>}
        </div>

        <div className="form-action-1">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            name="fullName"
            className='details'
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
            aria-describedby={errors.fullName ? "name-error" : undefined}
          />
          {errors.fullName && <p id="name-error" role="alert" style={{ color: 'red' }}>{errors.fullName}</p>}
        </div>

        <img className='circles' src={circle} alt="" />

        <div className="form-action-1">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            className='details'
            id="email"
            placeholder='example@email.com'
            value={formData.email}
            onChange={handleChange}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && <p id="email-error" role="alert" style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        <div className="form-action-1">
          <label htmlFor="github">GitHub Username</label>
          <input
            type="text"
            name="github"
            className='details'
            id="github"
            placeholder='@yourusername'
            value={formData.github}
            onChange={handleChange}
            aria-describedby={errors.github ? "github-error" : undefined}
          />
          {errors.github && <p id="github-error" role="alert" style={{ color: 'red' }}>{errors.github}</p>}
        </div>

        <div id="form-errors" tabIndex="-1" ref={errorRef} aria-live="assertive" style={{ position: 'absolute', left: '-9999px' }}>
          {Object.values(errors).length > 0 && "There are errors in the form."}
        </div>

        <button type="submit" className="form-action-btn">Generate My Ticket</button>
      </form>
    </main>
  );
};

export default Form;
