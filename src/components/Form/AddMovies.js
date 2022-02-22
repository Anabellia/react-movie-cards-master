import React, { useState } from 'react';
import useInput from '../../hooks/form-input';

const AddMovies = () => {
  const {
    value: enteredTitle,
    isValid: titleIsValid,
    invalidValue: titleIsInvalid,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitleInput,
  } = useInput();

  const {
    value: enteredSubtitle,
    isValid: subtitleIsValid,
    invalidValue: subtitleIsInvalid,
    valueChangeHandler: subtitleChangeHandler,
    inputBlurHandler: subtitleBlurHandler,
    reset: resetSubtitleInput,
  } = useInput();

  const {
    value: enteredImage,
    isValid: imageIsValid,
    invalidValue: imageIsInvalid,
    valueChangeHandler: imageChangeHandler,
    inputBlurHandler: imageBlurHandler,
    reset: resetImageInput,
  } = useInput();

  const {
    value: enteredDesc,
    isValid: descIsValid,
    invalidValue: descIsInvalid,
    valueChangeHandler: descChangeHandler,
    inputBlurHandler: descBlurHandler,
    reset: resetDescInput,
  } = useInput();

  let formIsValid = false;

  if (titleIsValid && subtitleIsValid && imageIsValid && descIsValid) {
    formIsValid = true;
  }

  const submitHandler = event => {
    event.preventDefault();

    console.log(enteredTitle);
    resetTitleInput();
    resetSubtitleInput();
    resetImageInput();
    resetDescInput();
  };

  const classTitleToggle = titleIsInvalid ? 'form__input invalid' : 'form__input';
  const classSubtitleToggle = subtitleIsInvalid ? 'form__input invalid' : 'form__input';
  const classImageToggle = imageIsInvalid ? 'form__input invalid' : 'form__input';
  const classDescToggle = descIsInvalid ? 'form__input invalid' : 'form__input';

  return (
    <form className="form" onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">Movie Title:</label>
        <input
          className={classTitleToggle}
          id="title"
          type="text"
          onChange={titleChangeHandler}
          onBlur={titleBlurHandler}
          value={enteredTitle}
        />
        {titleIsInvalid && <span>Title is empty</span>}
      </div>
      <div>
        <label htmlFor="subtitle">Subtitle:</label>
        <input
          className={classSubtitleToggle}
          id="subtitle"
          type="text"
          onChange={subtitleChangeHandler}
          onBlur={subtitleBlurHandler}
          value={enteredSubtitle}
        />
        {subtitleIsInvalid && <span>Subtitle is empty</span>}
      </div>
      <div>
        <label htmlFor="image">Image url:</label>
        <input
          className={classImageToggle}
          id="image"
          type="url"
          onChange={imageChangeHandler}
          onBlur={imageBlurHandler}
          value={enteredImage}
        />
        {imageIsInvalid && <span>Image url is empty</span>}
      </div>
      <div>
        <label htmlFor="subtitle">Description</label>
        <input
          className={classDescToggle}
          id="description"
          type="text"
          onChange={descChangeHandler}
          onBlur={descBlurHandler}
          value={enteredDesc}
        />
      </div>
      <button disabled={!formIsValid} className="btn">
        Add Movie
      </button>
    </form>
  );
};

export default AddMovies;