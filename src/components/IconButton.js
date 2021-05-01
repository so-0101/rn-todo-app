import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import {icons} from '../icons';
const Icon = styled.Image`
    width: 30px;
    height: 30px;
    margin: 10px;
    tint-color: ${({theme, completed})=>completed? theme.done:theme.text};
`;

const IconButton = ({icon, onPress, item}) => {
    const _onPress = () => {
        onPress(item.id);
    };
    return(
        <TouchableOpacity onPress={_onPress}>
            <View>
                <Icon source={icon} completed={item.completed}/>
            </View>
        </TouchableOpacity>
    );
};
IconButton.defaultProps={
    item: {completed:false},
}
IconButton.propTypes = {
    icon: PropTypes.oneOf(Object.values(icons)).isRequired,//icons는 객체형태인데, oneOf안에는 배열 형태로 값을 전달해야함
    onPress: PropTypes.func,
    item: PropTypes.object,
};

export default IconButton;