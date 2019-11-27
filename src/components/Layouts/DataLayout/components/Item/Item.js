import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import convertDate from '../../../../../util/convertDate';

import {
  formState,
  fieldValidation
} from '../../../../../validation/validationForm';
import {
  textareaErrorText,
  textareaRegex,
  numberErrorText,
  numberErrorRegex
} from '../../../../../validation/validateEntry';

class Item extends PureComponent {
  state = formState;

  onHandleDelete = (id) => {
    this.props.handleDelete(id);
  }
  onHandleEditForm = (id) => {
    this.props.handleEditForm(id);
  }
  onHandleCancelEdit = (id) => {
    this.props.handleCancelEdit(id);
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

  // *** EDIT *** //
  onHandleEdit = (id) => {
    const { formValidate: { name, quantity, total, level } } = this.state;
    if (
      name.text === null || name.text === '' ||
      quantity.text === null || quantity.text === '' ||
      total.text === null || total.text === '' ||
      level.text === null || level.text === ''
    ) {
      this.setState({
        submitError: 'Any field is not allow empty'
      })
    } else {
      if (name.error || quantity.error || total.error || level.error) {
        this.setState({
          submitError: 'Please typing like as error message'
        })
      } else {
        const params = {
          order_id: id,
          name: name.text,
          quantity: quantity.text,
          total: total.text,
          level: level.text,
        }
        this.props.handleEdit(params);
        // Return field data null
        this.setState(() => {
          return formState
        })
      }
    }
  }

  render() {
    const { item, isEditting } = this.props;

    const {
      name,
      date_order,
      level,
      order_id,
      quantity,
      total
    } = item;

    const {
      formValidate,
      submitError
    } = this.state;

    const levelEntry = formValidate.level.text;
    const nameEntry = formValidate.name.text;
    const quantityEntry = formValidate.quantity.text;
    const totalEntry = formValidate.total.text;

    const levelError = formValidate.level.error;
    const nameError = formValidate.name.error;
    const quantityError = formValidate.quantity.error;
    const totalError = formValidate.total.error;
    return (
      <React.Fragment>
        {
          isEditting ?
            <ul className="item__bodyList isEditting">
              <li>
                <p>
                  <input
                    placeholder="Type new NAME ..."
                    onChange={(e) => this.onChangeField(e, textareaRegex, 'name', textareaErrorText)}
                    type="text"
                    value={nameEntry}
                  />
                  <label className="error-text">{nameError}</label>
                </p>
                <input
                  placeholder="Type new LEVEL ..."
                  onChange={(e) => this.onChangeField(e, numberErrorRegex, 'level', numberErrorText)}
                  type="text"
                  value={levelEntry}
                />
                <label className="error-text">{levelError}</label>
              </li>
              <li>
                <input
                  placeholder="Type new QUANTITY ..."
                  onChange={(e) => this.onChangeField(e, numberErrorRegex, 'quantity', numberErrorText)}
                  type="text"
                  value={quantityEntry}
                />
                <label className="error-text">{quantityError}</label>
              </li>
              <li></li>
              <li></li>
              <li>
                <input
                  placeholder="Type new TOTAL ..."
                  onChange={(e) => this.onChangeField(e, numberErrorRegex, 'total', numberErrorText)}
                  type="text"
                  value={totalEntry}
                />
                <label className="error-text">{totalError}</label>
              </li>
              <li>
                <button className="btn btn-execute" onClick={() => this.onHandleEdit(order_id)}><i className="fas fa-check"></i></button>
                <button className="btn btn-execute" onClick={() => this.onHandleCancelEdit(order_id)}><i className="fas fa-times"></i></button>
                <label>{submitError}</label>
              </li>
            </ul>
            :
            <ul className="item__bodyList">
              <li>
                <p>{name}</p>
                <label>
                  Lv{level}
                </label>
              </li>
              <li>
                {quantity}
              </li>
              <li>
                {convertDate(date_order)}
              </li>
              <li>
                {order_id}
              </li>
              <li>
                {total}
              </li>
              <li>
                <button className="btn btn-execute" onClick={() => this.onHandleDelete(order_id)}><i className="fas fa-trash"></i></button>
                <button className="btn btn-execute" onClick={() => this.onHandleEditForm(order_id)}><i className="fas fa-pencil-alt"></i></button>
              </li>
            </ul>
        }
      </React.Fragment>
    );
  }
}

Item.propTypes = {
  handleLike: PropTypes.func,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
  handleCancelEdit: PropTypes.func,
  handleEditForm: PropTypes.func,
  isEditting: PropTypes.bool,
  item: PropTypes.object,
};

export default Item;
