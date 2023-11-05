import {
  StyledForm,
  StyledLabel,
  StyledSpan,
  StyledInput,
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
          <StyledSpan $required>starting date</StyledSpan>
          <StyledInput
            required
            type='date'
            id='starting-date'
            placeholder='starting date'
            value={formData.startingDate}
            onChange={handleChange}
          ></StyledInput>
        </StyledLabel>
        <StyledLabel htmlFor='end-date'>
          <StyledSpan $required>end date</StyledSpan>
          <StyledInput
            required
            type='date'
            id='end-date'
            placeholder='end date'
            value={formData.endDate}
            onChange={handleChange}
          ></StyledInput>
        </StyledLabel>
      </StyledInputGroup>
      <StyledLabel htmlFor='name'>
        <StyledSpan $required>school name</StyledSpan>
        <StyledInput
          required
          id='name'
          value={formData.name}
          onChange={handleChange}
        ></StyledInput>
      </StyledLabel>
      <StyledLabel htmlFor='title'>
        <StyledSpan $required>title of study</StyledSpan>
        <StyledInput
          required
          id='title'
          value={formData.title}
          onChange={handleChange}
        ></StyledInput>
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
