import {
  StyledForm,
  StyledLabel,
  StyledSpan,
  StyledInputGroup,
  StyledReturnButton,
  StyledSubmitPanel,
  StyledSubmitPanelButton,
} from '../FormComponents';

export default function WExperienceForm({
  formData,
  handleChange,
  handleReturn,
  mode,
  handleSubmit,
}) {
  return (
    <StyledForm data-id={formData.id} onSubmit={handleSubmit}>
      {mode == 'edit' && (
        <StyledReturnButton
          className='material-symbols-outlined'
          onClick={handleReturn}
        >
          arrow_back
        </StyledReturnButton>
      )}
      <StyledInputGroup>
        <StyledLabel htmlFor='starting-date'>
          <StyledSpan>starting date</StyledSpan>
          <input
            type='date'
            id='starting date'
            value={formData.startingDate}
            onChange={handleChange}
          ></input>
        </StyledLabel>
        <StyledLabel htmlFor='end-date'>
          <StyledSpan>end date</StyledSpan>
          <input
            type='date'
            id='end-date'
            value={formData.endDate}
            onChange={handleChange}
          ></input>
        </StyledLabel>
      </StyledInputGroup>
      <StyledLabel htmlFor='name'>
        <StyledSpan>company name</StyledSpan>
        <input id='name' value={formData.name} onChange={handleChange}></input>
      </StyledLabel>
      <StyledLabel htmlFor='title'>
        <StyledSpan>position title</StyledSpan>
        <input
          id='title'
          value={formData.title}
          onChange={handleChange}
        ></input>
      </StyledLabel>
      <StyledLabel htmlFor='description'>
        <StyledSpan>description</StyledSpan>
        <textarea
          id='description'
          rows='5'
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </StyledLabel>
      <StyledSubmitPanel>
        {mode == 'create' && (
          <StyledSubmitPanelButton
            className='material-symbols-outlined'
            type='button'
            onClick={handleReturn}
          >
            close
          </StyledSubmitPanelButton>
        )}
        <StyledSubmitPanelButton
          className='material-symbols-outlined'
          type='submit'
        >
          check
        </StyledSubmitPanelButton>
      </StyledSubmitPanel>
    </StyledForm>
  );
}
