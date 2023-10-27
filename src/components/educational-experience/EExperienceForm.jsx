import {
  StyledForm,
  StyledLabel,
  StyledSpan,
  StyledInputGroup,
  StyledReturnButton,
  StyledSubmitPanel,
  StyledSubmitPanelButton,
} from '../FormComponents';

export default function EExperienceForm({
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
            id='starting-date'
            placeholder='starting date'
            value={formData.startingDate}
            onChange={handleChange}
          ></input>
        </StyledLabel>
        <StyledLabel htmlFor='end-date'>
          <StyledSpan>end date</StyledSpan>
          <input
            type='date'
            id='end-date'
            placeholder='end date'
            value={formData.endDate}
            onChange={handleChange}
          ></input>
        </StyledLabel>
      </StyledInputGroup>
      <StyledLabel htmlFor='name'>
        <StyledSpan>school name</StyledSpan>
        <input id='name' value={formData.name} onChange={handleChange}></input>
      </StyledLabel>
      <StyledLabel htmlFor='title'>
        <StyledSpan>title of study</StyledSpan>
        <input
          id='title'
          value={formData.title}
          onChange={handleChange}
        ></input>
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
