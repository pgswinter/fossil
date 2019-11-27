import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { Test } from './InsertModal.styles';

import {
  formState,
  fieldValidation
} from '../../../validation/validationForm';
import {
  textareaErrorText,
  textareaRegex,
  numberErrorText,
  numberErrorRegex
} from '../../../validation/validateEntry';

class InsertModal extends PureComponent {
  state = formState;

  componentDidMount = () => {

  }
  // *** VALIDATION FIELD ***//
  onChangeField = (e, fieldRegex, fieldName, fieldError) => {
    const validatedField = fieldValidation(e, fieldRegex, fieldError);
    this.setState(prevState => {
      const { formValidate } = prevState;
      return {
        formValidate: {
          ...formValidate,
          [fieldName]: validatedField
        },
      }
    })
  }
  // *** ADD FOSSIL *** //
  onHandleAdd = () => {
    const { formValidate: { orderId, name, quantity, total, level } } = this.state;
    if (
      level.text === null || level.text === '' ||
      orderId.text === null || orderId.text === '' ||
      name.text === null || name.text === '' ||
      quantity.text === null || quantity.text === '' ||
      total.text === null || total.text === ''
    ) {
      this.setState({
        submitError: 'Any field is not allow empty'
      })
    } else {
      if (level.error || orderId.error || name.error || quantity.error || total.error) {
        this.setState({
          submitError: 'Please typing like as error message'
        })
      } else {
        const params = {
          level: level.text,
          orderId: orderId.text,
          name: name.text,
          quantity: quantity.text,
          total: total.text,
        }
        this.props.handleAdd(params);
        // Return field data null
        this.setState(() => {
          return formState
        })
      }
    }
  }

  render() {
    const {
      active
    } = this.props;
    const {
      formValidate: {
        level,
        orderId,
        name,
        quantity,
        total
      },
      submitError
    } = this.state;

    const levelEntry = level.text;
    const fossilIdEntry = orderId.text;
    const nameEntry = name.text;
    const quantityEntry = quantity.text;
    const totalEntry = total.text;

    const levelError = level.error;
    const fossilIdError = orderId.error;
    const nameError = name.error;
    const quantityError = quantity.error;
    const totalError = total.error;
    return (
      <React.Fragment>
        <div className={`${active ? 'active' : ''} insertModal modal`}>
          <p>
            <label>Order Id</label>
            <input
              onChange={(e) => this.onChangeField(e, textareaRegex, 'orderId', textareaErrorText)}
              type="text"
              value={fossilIdEntry}
            />
            <label className="error-text">{fossilIdError}</label>
          </p>
          <p>
            <label>Level</label>
            <input
              onChange={(e) => this.onChangeField(e, numberErrorRegex, 'level', numberErrorText)}
              type="text"
              value={levelEntry}
            />
            <label className="error-text">{levelError}</label>
          </p>
          <p>
            <label>Name</label>
            <input
              onChange={(e) => this.onChangeField(e, textareaRegex, 'name', textareaErrorText)}
              type="text"
              value={nameEntry}
            />
            <label className="error-text">{nameError}</label>
          </p>
          <p>
            <label>Quantity</label>
            <textarea
              onChange={(e) => this.onChangeField(e, numberErrorRegex, 'quantity', numberErrorText)}
              type="text"
              value={quantityEntry}
            ></textarea>
            <label className="error-text">{quantityError}</label>
          </p>
          <p>
            <label>Total</label>
            <input
              onChange={(e) => this.onChangeField(e, numberErrorRegex, 'total', numberErrorText)}
              type="text"
              value={totalEntry}
            />
            <label className="error-text">{totalError}</label>
          </p>
          <p>
            <button className="btn btn-submit" onClick={() => this.onHandleAdd()}>Submit</button>
            <label>{submitError}</label>
          </p>
        </div>
      </React.Fragment>
    );
  }
}

InsertModal.propTypes = {
  active: PropTypes.bool,
  handleAdd: PropTypes.func,
};

InsertModal.defaultProps = {
  // bla: 'test',
};

// const mapStateToProps = state => ({
//   // blabla: state.blabla,
// });

// const mapDispatchToProps = dispatch => ({
//   // fnBlaBla: () => dispatch(action.name()),
// });

export default connect(
  // mapStateToProps,
  // mapDispatchToProps,
)(InsertModal);
