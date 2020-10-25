/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
    Button,
    Field,
    ImageCard,
    Loader,
    Modal,
    LocationPicker,
    ModalSpan,
} from 'components/common';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import action from 'redux/actions/Action.Post';
import utils from 'utils/utils';
import { connect } from 'react-redux';
import { Grid, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import * as utilsConstants from 'config/constants/Utils';
import { modal } from 'config/constants/Utils';
import validator from 'services/validator/FieldsValidator';
import {
    Wrapper,
    Submit,
    useStyle,
    theme,
    StyledLink,
    DisableTextField,
    ImageTextField,
    CustomTextField,
} from './styles';

const formConstant = utilsConstants.formUtilConstant;
const { imageFormat } = utilsConstants;

const Form = (props) => {
    const formState = {
        name: '',
        year: '',
        fuelType: '',
        distanceTraveled: 0,
        images: [],
        previews: [],
        model: '',
        otherFeatures: [],
        brand: '',
        count: 0,
        price: 0,
        oldImages: [],
    };
    const {
        onSubmit,
        onCancel,
        onBrandChange,
        models,
        brands,
        getBrands,
        pending,
        isSuccess,
        message,
        type,
        fetchPostData,
        data,
        id,
        onDismissModal,
        location,
        fieldsValidity,
        fieldsErrorMessage,
    } = props;
    const [modalState, setModalState] = useState(false);
    const [state, setState] = useState(formState);
    const [oldImageMap, setOldImageMap] = useState('');
    const [isFeatureValid, setIsFeatureValid] = useState('true');
    const classes = useStyle();
    const {
        name,
        brand,
        model,
        year,
        fuelType,
        otherFeatures,
        images,
        previews,
        price,
        distanceTraveled,
        oldImages,
    } = state;
    const fuelTypes = ['Gasoline', 'Oil', 'Electric'];
    const modalStateToggleHandler = () => {
        onDismissModal();
        setModalState(false);
    };
    const onImageChangeHandler = async (target) => {
        if (target.files.length !== 0) {
            const { images, previews } = state;
            const imageFile = target.files[0];
            const preview = await utils.base64Converter(imageFile);
            previews.push(preview);
            images.push(imageFile);
            setState({
                ...state,
                images,
                previews,
            });
        }
    };
    const onChangeHandler = (target) => {
        setState({
            ...state,
            [target.name]: target.value,
        });
    };
    const removeImage = (index) => {
        const { images, previews } = state;
        images.splice(index, 1);
        const deletedImage = previews.splice(index, 1);
        if (
            type === formConstant.type.update &&
            deletedImage[0].startsWith(formConstant.oldImageURL)
        ) {
            let newImageMap = oldImageMap;
            Object.entries(oldImages).forEach((entry) => {
                const [key, value] = entry;
                if (deletedImage[0] === value) {
                    newImageMap += `,${key.replace('image_', '')}`;
                }
            });
            setOldImageMap(newImageMap);
        }
        setState({
            ...state,
            images,
            previews,
        });
    };
    const onSubmitHandler = async () => {
        setIsFeatureValid(true);
        switch (props.type) {
            case formConstant.type.update:
                onSubmit({
                    name,
                    brand,
                    model,
                    year,
                    fuelType,
                    price,
                    distanceTraveled,
                    location: props.location || props.data.location,
                    information: otherFeatures,
                    images,
                    oldImageMap: oldImageMap.substring(1),
                    imgUrls: oldImages,
                });
                break;
            default:
                onSubmit({
                    name,
                    brand,
                    model,
                    year,
                    fuelType,
                    price,
                    location,
                    distanceTraveled,
                    information: otherFeatures,
                    images,
                });
                break;
        }
    };
    const onChange = async (event) => {
        switch (event.target.name) {
            case formConstant.imageUrl:
                onImageChangeHandler(event.target);
                break;
            default:
                onChangeHandler(event.target);
                break;
        }
    };
    useEffect(() => {
        getBrands();
        if (type === formConstant.type.update) {
            fetchPostData(id);
        }
    }, []);
    useEffect(() => {
        if (data && state.count === 0 && type === formConstant.type.update) {
            const {
                name,
                brand,
                model,
                year,
                fuelType,
                price,
                distanceTraveled,
                information,
                images,
            } = data;
            const otherFeatures = [];
            Object.values(information[formConstant.otherFeatures]).forEach(
                (value) => {
                    otherFeatures.push(value);
                }
            );
            const newPreviews = [];
            const oldImages = images;
            Object.values(images).forEach((value) => {
                newPreviews.push(value);
            });
            setState({
                ...state,
                name,
                brand,
                model,
                year,
                fuelType,
                price: parseInt(price.replace(/,|$/, ''), 10),
                distanceTraveled: parseInt(
                    distanceTraveled.replace(/,|km/, ''),
                    10
                ),
                otherFeatures,
                previews: newPreviews,
                count: 1,
                oldImages,
            });
            onBrandChange({ brands, value: brand });
        }
        if (data && state.count === 1 && type === formConstant.type.update) {
            props.getLocation(JSON.parse(props.data.location).coor);
            setState({ ...state, count: 2 });
        }
        if (message !== '' && modalState === false) setModalState(true);
    });

    const brandsFlatProps = {
        options: brands.map((option) => (option.name ? option.name : '')),
    };

    const modelsFlatProps = {
        options: models.map((option) => (option.name ? option.name : '')),
    };

    const ageFlatProps = {
        options: utils
            .getYears()
            .reverse()
            .map((year) => year.toString()),
    };

    const fuelTypesFlatProps = {
        options: fuelTypes.map((option) => option),
    };

    const onBrandChangeHandler = (event, value) => {
        onBrandChange({ brands, value });
        setState({
            ...state,
            brand: value,
        });
    };

    const onModelChangeHandler = (event, value) => {
        setState({
            ...state,
            model: value,
        });
    };

    const onYearChangeHandler = (event, value) => {
        setState({
            ...state,
            year: parseInt(value, 10),
        });
    };

    const onFuelTypeChangeHandler = (event, value) => {
        setState({
            ...state,
            fuelType: value,
        });
    };

    const handleInputOtherFeatures = (event) => {
        if (event.keyCode === 13 && event.target.value) {
            setState({
                ...state,
                otherFeatures: state.otherFeatures.concat(event.target.value),
            });
        }
    };

    const onFeatureSubmitHandler = (event, newVal) => {
        if (validator.characterValidator(newVal[newVal.length - 1]) === false) {
            setIsFeatureValid(false);
        } else {
            setIsFeatureValid(true);
            setState({
                ...state,
                otherFeatures: newVal,
            });
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <Field>
                    <Grid container className={classes.selectedBox} spacing={3}>
                        <Grid item xs={6} className={classes.dualLine}>
                            <Autocomplete
                                className={classes.autoComplete}
                                name="brand"
                                disableClearable
                                {...brandsFlatProps}
                                onChange={onBrandChangeHandler}
                                value={brand}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Brands"
                                        margin="normal"
                                        value={brand}
                                    />
                                )}
                            />
                            {fieldsValidity['brand'] === false && (
                                <ModalSpan isValid={false}>
                                    {fieldsErrorMessage['brand']}
                                </ModalSpan>
                            )}
                        </Grid>
                        <Grid item xs={6} className={classes.dualLine}>
                            <Autocomplete
                                className={classes.autoComplete}
                                name="model"
                                disableClearable
                                {...modelsFlatProps}
                                onChange={onModelChangeHandler}
                                value={model}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Models"
                                        margin="normal"
                                    />
                                )}
                            />
                            {fieldsValidity['model'] === false && (
                                <ModalSpan isValid={false}>
                                    {fieldsErrorMessage['model']}
                                </ModalSpan>
                            )}
                        </Grid>
                    </Grid>
                </Field>
                <Field>
                    <CustomTextField
                        name="name"
                        type="text"
                        label="Name"
                        className={classes.autoComplete}
                        onChange={onChange}
                        value={name}
                        isError={!fieldsValidity['name']}
                    />
                    {fieldsValidity['name'] === false && (
                        <ModalSpan isValid={false}>
                            {fieldsErrorMessage['name']}
                        </ModalSpan>
                    )}
                </Field>
                <Field>
                    <Grid container className={classes.selectedBox} spacing={3}>
                        <Grid item xs={6} className={classes.dualLine}>
                            <Autocomplete
                                className={classes.autoComplete}
                                name="year"
                                disableClearable
                                {...ageFlatProps}
                                onChange={onYearChangeHandler}
                                value={year}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Age"
                                        margin="normal"
                                        value={year}
                                    />
                                )}
                            />
                            {fieldsValidity['year'] === false && (
                                <ModalSpan isValid={false}>
                                    {fieldsErrorMessage['year']}
                                </ModalSpan>
                            )}
                        </Grid>
                        <Grid item xs={6} className={classes.dualLine}>
                            <Autocomplete
                                className={classes.autoComplete}
                                name="fueltype"
                                disableClearable
                                {...fuelTypesFlatProps}
                                onChange={onFuelTypeChangeHandler}
                                value={fuelType}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Fuel Type"
                                        margin="normal"
                                    />
                                )}
                            />
                            {fieldsValidity['fuelType'] === false && (
                                <ModalSpan isValid={false}>
                                    {fieldsErrorMessage['fuelType']}
                                </ModalSpan>
                            )}
                        </Grid>
                    </Grid>
                </Field>
                <Field>
                    <DisableTextField
                        className={`${classes.autoComplete} ${classes.customTextField}`}
                        label="Location"
                        onChange={onChange}
                        InputProps={{
                            readOnly: true,
                        }}
                        value={utils.getLocationString(location)}
                    />
                </Field>
                <LocationPicker defaultLocation={location} />
                <Field>
                    <CustomTextField
                        name="price"
                        className={`${classes.autoComplete} ${classes.customTextField}`}
                        label="Price (USD)"
                        type="number"
                        onChange={onChange}
                        InputProps={{
                            inputProps: {
                                min: 0,
                            },
                        }}
                        value={price}
                        isError={!fieldsValidity['price']}
                    />
                    {fieldsValidity['price'] === false && (
                        <ModalSpan isValid={false}>
                            {fieldsErrorMessage['price']}
                        </ModalSpan>
                    )}
                </Field>
                <Field>
                    <CustomTextField
                        name="distanceTraveled"
                        type="number"
                        label="Distance Traveled (km)"
                        className={`${classes.autoComplete} ${classes.customTextField}`}
                        onChange={onChange}
                        InputProps={{
                            inputProps: {
                                min: 0,
                            },
                        }}
                        value={distanceTraveled}
                        isError={!fieldsValidity['distanceTraveled']}
                    />
                    {fieldsValidity['distanceTraveled'] === false && (
                        <ModalSpan isValid={false}>
                            {fieldsErrorMessage['distanceTraveled']}
                        </ModalSpan>
                    )}
                </Field>
                <Field>
                    <Autocomplete
                        multiple
                        freeSolo
                        value={otherFeatures}
                        onChange={onFeatureSubmitHandler}
                        options={[]}
                        className={`${classes.autoComplete} ${classes.customTextField}`}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="outlined"
                                label="Other Features"
                                placeholder="Type each feature and enter"
                                onKeyUp={handleInputOtherFeatures}
                            />
                        )}
                    />
                    {fieldsValidity['information'] === false && (
                        <ModalSpan isValid={false}>
                            {fieldsErrorMessage['information']}
                        </ModalSpan>
                    )}
                    {isFeatureValid === false && (
                        <ModalSpan isValid={false}>
                            Feature can not contain special characters
                        </ModalSpan>
                    )}
                </Field>
                <Field>
                    <Grid container spacing={3}>
                        {previews &&
                            previews.map((image, index) => {
                                return (
                                    <Grid xs={4} key={`key${image}`}>
                                        <ImageCard
                                            xs={4}
                                            key={`key${image}`}
                                            index={index}
                                            imgSrc={image}
                                            removeImage={removeImage}
                                        />
                                    </Grid>
                                );
                            })}
                    </Grid>
                </Field>
                <Field>
                    <ImageTextField
                        name="imageUrl"
                        className={`${classes.customTextField}`}
                        type="file"
                        label="Images"
                        onChange={onChange}
                        InputProps={{
                            readOnly: true,
                        }}
                        accept={imageFormat}
                    />
                    {fieldsValidity['images'] === false && (
                        <ModalSpan isValid={false}>
                            {fieldsErrorMessage['images']}
                        </ModalSpan>
                    )}
                </Field>
                <Submit>
                    <Button onClick={onSubmitHandler} isSuccess>
                        Upload
                    </Button>
                    <Button onClick={onCancel} isSuccess={false}>
                        {type === formConstant.type.update ? (
                            <StyledLink to={`/posts/${id}`}>Cancel</StyledLink>
                        ) : (
                            <StyledLink to="/">Cancel</StyledLink>
                        )}
                    </Button>
                </Submit>
            </Wrapper>
            {pending && <Loader type="FULL-PAGE" />}
            {modalState && (
                <Modal
                    type={modal.type.alert}
                    alertMessage={message}
                    isSuccess={isSuccess}
                    handlerToggle={modalStateToggleHandler}
                />
            )}
        </ThemeProvider>
    );
};

Form.propTypes = {
    models: PropTypes.arrayOf(PropTypes.object),
    location: PropTypes.string,
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
    onBrandChange: PropTypes.func,
    brands: PropTypes.arrayOf(PropTypes.object),
    getBrands: PropTypes.func,
    pending: PropTypes.bool,
    isSuccess: PropTypes.bool,
    message: PropTypes.string,
    type: PropTypes.string,
    fetchPostData: PropTypes.func,
    data: PropTypes.object,
    id: PropTypes.string,
    onDismissModal: PropTypes.func,
    getLocation: PropTypes.func,
    fieldsValidity: PropTypes.objectOf(PropTypes.bool),
    fieldsErrorMessage: PropTypes.objectOf(PropTypes.string),
};

Form.defaultProps = {
    models: ['Rx'],
    location:
        '{"place":"Da Nang,Vietnam","coor":{"lat":16.054745932122085,"lng":108.2209027359643}}',
    onSubmit: () => {},
    onCancel: () => {},
    brands: [],
    onBrandChange: () => {},
    getBrands: () => {},
    pending: false,
    isSuccess: false,
    message: '',
    type: '',
    fetchPostData: () => {},
    data: undefined,
    onDismissModal: () => {},
    getLocation: () => {},
    fieldsValidity: {},
    fieldsErrorMessage: {},
};

const mapStateToProps = (state) => ({ ...state.postReducer });
const mapDispatchToProps = (dispatch) => ({
    onBrandChange: (payload) => dispatch(action.loadModels(payload)),
    getBrands: () => dispatch(action.loadBrands()),
    fetchPostData: (id) => dispatch(action.fetchPostData(id)),
    onDismissModal: () => dispatch(action.dismissMessage()),
    onCancel: () => dispatch(action.cancel()),
    getLocation: (coordinates) =>
        dispatch(action.onLocationChange(coordinates)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
