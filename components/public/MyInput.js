import React, {Component} from 'react';
import {Dimensions, TextInput} from 'react-native';
import colors from '../../constants/Colors'

class MyInput extends Component{
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            focused: false
        }
    }

    focus() {
        this.refs.textInput.focus();
    }

    render() {
        return (
            <TextInput ref={'textInput'} {...this.props} onFocus={() => {this.setState({focused: true})}} onBlur={() => {this.setState({focused: false})}} style={
                [
                    {fontFamily: 'iran-sans'},
                    this.props.style,
                    this.props.hidden ? {display: 'none'} : '',
                    this.props.absolute ? {position: 'absolute'} : '',
                    this.props.relative ? {position: 'relative'} : '',
                    this.props.overflow ? {overflow: this.props.overflow} : '',
                    this.props.opacity ? {opacity: this.props.opacity} : '',
                    this.props.rtl ? {direction: 'rtl'} : '',
                    this.props.ltr ? {direction: 'ltr'} : '',
                    this.props.flex ? {flex: this.props.flex == true ? 1 : this.props.flex} : '',
                    this.props.wrap ? {flexWrap: 'wrap'} : '',
                    this.props.nowrap ? {flexWrap: 'nowrap'} : '',
                    this.props.row ? {flexDirection: 'row'} : '',
                    this.props.rowRev ? {flexDirection: 'row-reverse'} : '',
                    this.props.col ? {flexDirection: 'column'} : '',
                    this.props.colRev ? {flexDirection: 'column-reverse'} : '',
                    this.props.flexStart ? {justifyContents: 'flex-start'} : '',
                    this.props.flexEnd ? {justifyContents: 'flex-end'} : '',
                    this.props.flexCenter ? {justifyContents: 'center'} : '',
                    this.props.spaceBetween ? {justifyContents: 'space-between'} : '',
                    this.props.spaceAround ? {justifyContents: 'space-around'} : '',
                    this.props.spaceEvenly ? {justifyContents: 'space-evenly'} : '',
                    this.props.center ? {justifyContent: 'center', alignItems: 'center'} : '',
                    this.props.top ? {top: this.props.top} : '',
                    this.props.right ? {right: this.props.right} : '',
                    this.props.left ? {left: this.props.left} : '',
                    this.props.bottom ? {bottom: this.props.bottom} : '',
                    this.props.m ? {margin: this.props.m} : '',
                    this.props.mh ? {marginHorizontal: this.props.mh} : '',
                    this.props.mv ? {marginVertical: this.props.mv} : '',
                    this.props.ms ? {marginStart: this.props.ms} : '',
                    this.props.me ? {marginEnd: this.props.me} : '',
                    this.props.mt ? {marginTop: this.props.mt} : '',
                    this.props.mr ? {marginRight: this.props.mr} : '',
                    this.props.ml ? {marginLeft: this.props.ml} : '',
                    this.props.mb ? {marginBottom: this.props.mb} : '',
                    this.props.p ? {padding: this.props.p} : '',
                    this.props.ph ? {paddingHorizontal: this.props.ph} : '',
                    this.props.pv ? {paddingVertical: this.props.pv} : '',
                    this.props.ps ? {paddingStart: this.props.ps} : '',
                    this.props.pe ? {paddingEnd: this.props.pe} : '',
                    this.props.pt ? {paddingTop: this.props.pt} : '',
                    this.props.pr ? {paddingRight: this.props.pr} : '',
                    this.props.pl ? {paddingLeft: this.props.pl} : '',
                    this.props.pb ? {paddingBottom: this.props.pb} : '',
                    this.props.h ? {height: (this.props.h == 'full' ? this.state.height : (this.props.h >= 0 ? this.props.h : this.state.height + this.props.h))} : '',
                    this.props.hMin ? {minHeight: (this.props.hMin == 'full' ? this.state.height : (this.props.hMin >= 0 ? this.props.hMin : this.state.height + this.props.hMin))} : '',
                    this.props.hMax ? {maxHeight: (this.props.hMax == 'full' ? this.state.height : (this.props.hMax >= 0 ? this.props.hMax : this.state.height + this.props.hMax))} : '',
                    this.props.w ? {width: (this.props.w == 'full' ? this.state.width : (this.props.w >= 0 ? this.props.w : this.state.width + this.props.w))} : '',
                    this.props.wMin ? {minWidth: (this.props.wMin == 'full' ? this.state.width : (this.props.wMin >= 0 ? this.props.wMin : this.state.width + this.props.wMin))} : '',
                    this.props.wMax ? {maxWidth: (this.props.wMax == 'full' ? this.state.width : (this.props.wMax >= 0 ? this.props.wMax : this.state.width + this.props.wMax))} : '',
                    this.props.rounded ? {borderRadius: this.props.rounded == true ? 5 : this.props.rounded} : '',
                    this.props.circle ? {borderRadius: 1000} : '',
                    this.props.color ? {color: this.props.color} : '',
                    this.props.bg ? {backgroundColor: this.props.bg} : '',
                    this.props.z ? {zIndex: this.props.z} : '',

                    this.props.b ? {borderWidth: this.props.b} : '',
                    this.props.bColor ? {borderColor: this.state.focused ? colors.blue : this.props.bColor} : '',
                    this.props.bt ? {borderTopWidth: this.props.bt} : '',
                    this.props.btColor ? {borderTopColor: this.props.btColor} : '',
                    this.props.br ? {borderRightWidth: this.props.br} : '',
                    this.props.brColor ? {borderRightColor: this.props.brColor} : '',
                    this.props.bl ? {borderLeftWidth: this.props.bl} : '',
                    this.props.blColor ? {borderLeftColor: this.props.blColor} : '',
                    this.props.bb ? {borderBottomWidth: this.props.bb} : '',
                    this.props.bbColor ? {borderBottomColor: this.props.bbColor} : '',
                    this.props.bs ? {borderStartWidth: this.props.bs} : '',
                    this.props.bsColor ? {borderStartColor: this.props.bsColor} : '',
                    this.props.be ? {borderEndWidth: this.props.be} : '',
                    this.props.beColor ? {borderEndColor: this.props.beColor} : '',
                    this.props.bRadius ? {borderRadius: this.props.bRadius} : '',
                    this.props.btsRadius ? {borderTopStartRadius: this.props.btsRadius} : '',
                    this.props.bteRadius ? {borderTopEndRadius: this.props.bteRadius} : '',
                    this.props.btrRadius ? {borderTopRightRadius: this.props.btrRadius} : '',
                    this.props.btlRadius ? {borderTopLeftRadius: this.props.btlRadius} : '',
                    this.props.bbsRadius ? {borderBottomStartRadius: this.props.bbsRadius} : '',
                    this.props.bbeRadius ? {borderBottomEndRadius: this.props.bbeRadius} : '',
                    this.props.bbrRadius ? {borderBottomRightRadius: this.props.bbrRadius} : '',
                    this.props.bblRadius ? {borderBottomLeftRadius: this.props.bblRadius} : '',
                    this.props.borderDashed ? {borderStyle: 'dashed'} : '',
                    this.props.borderDotted ? {borderStyle: 'dotted'} : '',

                    this.props.textRight ? {textAlign: 'right'} : {textAlign: 'right'},
                    this.props.textLeft ? {textAlign: 'left'} : '',
                    this.props.textCenter ? {textAlign: 'center'} : '',
                    this.props.textJustify ? {textAlign: 'justify'} : '',
                    this.props.bold ? {fontWeight: 'bold'} : '',
                    this.props.italic ? {fontStyle: 'italic'} : '',
                    this.props.upper ? {textTransform: 'uppercase'} : '',
                    this.props.lower ? {textTransform: 'lowercase'} : '',
                    this.props.capital ? {textTransform: 'capitalize'} : '',
                    this.props.underline ? {textDecorationLine: 'underline'} : '',
                    this.props.lineThrough ? {textDecorationLine: 'line-through'} : '',
                    this.props.size ? {fontSize: this.props.size} : '',
                    this.props.lineHeight ? {lineHeight: this.props.lineHeight} : '',
                    this.props.h1 ? {fontSize: 48} : '',
                    this.props.h2 ? {fontSize: 36} : '',
                    this.props.h3 ? {fontSize: 24} : '',
                    this.props.h4 ? {fontSize: 20} : '',
                    this.props.h5 ? {fontSize: 16} : '',
                    this.props.h6 ? {fontSize: 12} : '',

                    // this.props.shadow ? {
                    //     shadowColor: this.props.shadowColor ?? this.state.focused ? colors.blue : '#777',
                    //     shadowOffset: {
                    //         width: 0,
                    //         height: -2,
                    //     },
                    //     shadowOpacity: 0.3,
                    //     shadowRadius: 5,
                    //     elevation: 2,
                    // } : {
                    //     shadowColor: '#777',
                    //     shadowOffset: {
                    //         width: 0,
                    //         height: -2,
                    //     },
                    //     shadowOpacity: 0.3,
                    //     shadowRadius: 5,
                    //     elevation: 2,
                    // },
                ]
            }/>
        );
    }
}

export default MyInput;