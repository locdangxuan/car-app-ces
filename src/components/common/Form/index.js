/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
    Button,
    Field,
    Span,
    Input,
    ImageCard,
    Textarea,
    Loader,
    Modal,
} from 'components/common';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import action from 'redux/actions/Action.Post';
import utils from 'utils/utils';
import { connect } from 'react-redux';
import { Select, MenuItem, Grid } from '@material-ui/core';
import * as utilsConstants from 'config/constants/Utils';
import { modal } from 'config/constants/Utils';
import { Wrapper, Submit, useStyle, theme } from './styles';

const formConstant = utilsConstants.formUtilConstant;
const { imageFormat } = utilsConstants;

const Form = (props) => {
    const formState = {
        name: '',
        year: '2020',
        fuelType: 'Gasoline',
        distanceTraveled: 0,
        images: [],
        previews: [],
        model: '',
        otherFeatures: '',
        brand: '',
        count: 0,
        price: 0,
        oldImages: [],
        location: 'Danang, Vietnam',
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
    } = props;
    const [modalState, setModalState] = useState(false);
    const [state, setState] = useState(formState);
    const [oldImageMap, setOldImageMap] = useState('');
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
        location,
    } = state;
    const fuelTypes = ['Gasoline', 'Oil', 'Electricity'];
    const modalStateToggleHandler = () => {
        onDismissModal();
        setModalState(false);
    };
    const onImageChangeHandler = async (target) => {
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
    };
    const onBrandChangeHandler = (target) => {
        onBrandChange({ brands, value: target.value });
        setState({
            ...state,
            brand: target.value,
        });
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
                    information: otherFeatures,
                    images,
                    oldImageMap: oldImageMap.substring(1),
                    imgUrls: oldImages,
                    location,
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
                    distanceTraveled,
                    information: otherFeatures,
                    images,
                    location,
                });
                break;
        }
    };
    const onChange = async (event) => {
        switch (event.target.name) {
            case formConstant.imageUrl:
                onImageChangeHandler(event.target);
                break;
            case formConstant.brand:
                onBrandChangeHandler(event.target);
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
                location,
            } = data;
            let otherFeatures = '';
            Object.values(information[formConstant.otherFeatures]).forEach(
                (value) => {
                    otherFeatures += `${value},`;
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
                price: parseInt(price.replace(',', ''), 10),
                distanceTraveled,
                otherFeatures,
                previews: newPreviews,
                count: 1,
                oldImages,
                location,
            });
            onBrandChange({ brands, value: brand });
        }
        if (message !== '' && modalState === false) setModalState(true);
    });
    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <Field>
                    <Grid container spacing={3}>
                        <Grid item xs={6} className={classes.dualLine}>
                            <Span>Brand</Span>
                            <Select
                                name="brand"
                                className={classes.selector}
                                onChange={onChange}
                                value={brand}
                            >
                                {brands &&
                                    brands.map((brand) => (
                                        <MenuItem
                                            key={brand.id}
                                            value={brand.name}
                                        >
                                            {brand.name}
                                        </MenuItem>
                                    ))}
                            </Select>
                        </Grid>
                        <Grid item xs={6} className={classes.dualLine}>
                            <Span item xs={5}>
                                Model
                            </Span>
                            <Select
                                name="model"
                                className={classes.selector}
                                onChange={onChange}
                                value={model}
                            >
                                {models &&
                                    models.map((model) => (
                                        <MenuItem
                                            key={model.id}
                                            value={model.name}
                                        >
                                            {model.name}
                                        </MenuItem>
                                    ))}
                            </Select>
                        </Grid>
                    </Grid>
                </Field>
                <Field>
                    <Span>Name</Span>
                    <Input
                        name="name"
                        type="text"
                        onChange={onChange}
                        value={name}
                    />
                </Field>
                <Field>
                    <Grid container spacing={3}>
                        <Grid item xs={6} className={classes.dualLine}>
                            <Span>Year</Span>
                            <Select
                                name="year"
                                className={classes.selector}
                                onChange={onChange}
                                value={year}
                            >
                                {utils.getYears().map((year) => (
                                    <MenuItem key={`year ${year}`} value={year}>
                                        {year}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={6} className={classes.dualLine}>
                            <Span item xs={5}>
                                Fuel Type
                            </Span>
                            <Select
                                name="fuelType"
                                className={classes.selector}
                                onChange={onChange}
                                value={fuelType}
                            >
                                {fuelTypes.map((type) => (
                                    <MenuItem key={`type ${type}`} value={type}>
                                        {type}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>
                </Field>
                <Field>
                    <Span>Location</Span>
                    <Input
                        name="price"
                        type="text"
                        onChange={onChange}
                        value={location}
                    />
                </Field>
                <Field>
                    <Span>Price (USD)</Span>
                    <Input
                        name="price"
                        type="number"
                        onChange={onChange}
                        min="1"
                        value={price}
                    />
                </Field>
                <Field>
                    <Span>Distance Traveled (km)</Span>
                    <Input
                        name="distanceTraveled"
                        type="number"
                        onChange={onChange}
                        min="1"
                        value={distanceTraveled}
                    />
                </Field>
                <Field>
                    <Span>Other Information</Span>
                    <Textarea
                        name="otherFeatures"
                        rows="6"
                        cols="70"
                        onChange={onChange}
                        value={otherFeatures}
                        placeholder="Feature1,Feature2,Feature3,..."
                    />
                </Field>
                <Field>
                    <Span>Upload Image</Span>
                    <Input
                        name="imageUrl"
                        type="file"
                        onChange={onChange}
                        accept={imageFormat}
                    />
                </Field>
                <Field>
                    <Span>Images</Span>
                    <Grid container spacing={3}>
                        {previews &&
                            previews.map((image, index) => {
                                return (
                                    <Grid item xs={5}>
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
                <Submit>
                    <Button onClick={onSubmitHandler} isSuccess>
                        Upload
                    </Button>
                    <Button onClick={onCancel} isSuccess={false}>
                        Cancel
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
};

Form.defaultProps = {
    models: ['Rx'],
    onSubmit: {},
    onCancel: {},
    brands: [],
    onBrandChange: {},
    getBrands: {},
    pending: false,
    isSuccess: false,
    message: '',
    type: '',
    fetchPostData: {},
    data: undefined,
    onDismissModal: {},
};

const mapStateToProps = (state) => ({ ...state.postReducer });
const mapDispatchToProps = (dispatch) => ({
    onBrandChange: (payload) => dispatch(action.loadModels(payload)),
    getBrands: () => dispatch(action.loadBrands()),
    getProfile: () => dispatch(action.loadProfile()),
    fetchPostData: (id) => dispatch(action.fetchPostData(id)),
    onDismissModal: () => dispatch(action.dismissMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
