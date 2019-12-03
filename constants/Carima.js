import {Dimensions, StyleSheet} from 'react-native';
import colors from './Colors';

const {width, height} = Dimensions.get('window');

const carima = StyleSheet.create({
    lh_0: {
        lineHeight: 0
    },
    lh_1: {
        lineHeight: 10
    },
    lh_2: {
        lineHeight: 20
    },
    lh_3: {
        lineHeight: 30
    },
    lh_4: {
        lineHeight: 40
    },
    lh_5: {
        lineHeight: 50
    },
    lh_6: {
        lineHeight: 60
    },

    fs_8: {
        fontSize: 8
    },
    fs_10: {
        fontSize: 10
    },
    fs_12: {
        fontSize: 12
    },
    fs_14: {
        fontSize: 14
    },
    fs_16: {
        fontSize: 16
    },
    fs_18: {
        fontSize: 18
    },
    fs_20: {
        fontSize: 20
    },
    fs_22: {
        fontSize: 22
    },
    fs_24: {
        fontSize: 24
    },
    fs_26: {
        fontSize: 26
    },
    fs_28: {
        fontSize: 28
    },
    fs_30: {
        fontSize: 30
    },
    fs_36: {
        fontSize: 36
    },
    fs_48: {
        fontSize: 48
    },
    fs_60: {
        fontSize: 60
    },

    font_normal: {
        fontStyle: 'normal'
    },
    font_italic: {
        fontStyle: 'italic'
    },

    fw_100: {
        fontWeight: '100'
    },
    fw_200: {
        fontWeight: '200'
    },
    fw_300: {
        fontWeight: '300'
    },
    fw_400: {
        fontWeight: '400'
    },
    fw_500: {
        fontWeight: '500'
    },
    fw_600: {
        fontWeight: '600'
    },
    fw_700: {
        fontWeight: '700'
    },
    fw_800: {
        fontWeight: '800'
    },
    fw_900: {
        fontWeight: '900'
    },
    fw_normal: {
        fontWeight: 'normal'
    },
    fw_bold: {
        fontWeight: 'bold'
    },

    ta_left: {
        textAlign: 'left'
    },
    ta_right: {
        textAlign: 'right'
    },
    ta_justify: {
        textAlign: 'justify'
    },
    ta_center: {
        textAlign: 'center'
    },
    ta_auto: {
        textAlign: 'auto'
    },

    td_none: {
        textDecorationLine: 'none'
    },
    td_underline: {
        textDecorationLine: 'underline'
    },
    td_line_through: {
        textDecorationLine: 'line-through'
    },
    td_underline_through: {
        textDecorationLine: 'underline line-through'
    },

    td_style_solid: {
        textDecorationStyle: 'solid'
    },
    td_style_double: {
        textDecorationStyle: 'double'
    },
    td_style_dotted: {
        textDecorationStyle: 'dotted'
    },
    td_style_dashed: {
        textDecorationStyle: 'dashed'
    },


    ta_vertical_auto: {
        textAlignVertical: 'auto'
    },
    ta_vertical_top: {
        textAlignVertical: 'top'
    },
    ta_vertical_bottom: {
        textAlignVertical: 'bottom'
    },
    ta_vertical_center: {
        textAlignVertical: 'center'
    },

    tt_none: {
        textTransform: 'none'
    },
    tt_upper: {
        textTransform: 'uppercase'
    },
    tt_lower: {
        textTransform: 'lowercase'
    },
    tt_capital: {
        textTransform: 'capitalize'
    },

    wd_auto: {
        writingDirection: 'auto'
    },
    wd_rtl: {
        writingDirection: 'rtl'
    },
    wd_ltr: {
        writingDirection: 'ltr'
    },

    backface_visible: {
        backfaceVisibility: 'visible'
    },
    backface_hidden: {
        backfaceVisibility: 'hidden'
    },

    b_1: {
        borderWidth: 1
    },
    b_2: {
        borderWidth: 2
    },
    b_3: {
        borderWidth: 3
    },
    b_4: {
        borderWidth: 4
    },
    b_5: {
        borderWidth: 5
    },
    b_light_green: {
        borderColor: colors.light_green
    },
    b_green: {
        borderColor: colors.green
    },
    b_dark_green: {
        borderColor: colors.dark_green
    },
    b_light_blue: {
        borderColor: colors.light_blue
    },
    b_blue: {
        borderColor: colors.blue
    },
    b_dark_blue: {
        borderColor: colors.dark_blue
    },
    b_light_red: {
        borderColor: colors.light_red
    },
    b_red: {
        borderColor: colors.red
    },
    b_dark_red: {
        borderColor: colors.dark_red
    },
    b_light_orange: {
        borderColor: colors.light_orange
    },
    b_orange: {
        borderColor: colors.orange
    },
    b_dark_orange: {
        borderColor: colors.dark_orange
    },
    b_light_yellow: {
        borderColor: colors.light_yellow
    },
    b_yellow: {
        borderColor: colors.yellow
    },
    b_dark_yellow: {
        borderColor: colors.dark_yellow
    },
    b_light_purple: {
        borderColor: colors.light_purple
    },
    b_purple: {
        borderColor: colors.purple
    },
    b_dark_purple: {
        borderColor: colors.dark_purple
    },
    b_white: {
        borderColor: colors.white
    },
    b_light: {
        borderColor: colors.light
    },
    b_gray: {
        borderColor: colors.gray
    },
    b_dark: {
        borderColor: colors.dark
    },
    b_black: {
        borderColor: colors.black
    },
    b_light_cyan: {
        borderColor: colors.light_cyan
    },
    b_cyan: {
        borderColor: colors.cyan
    },
    b_dark_cyan: {
        borderColor: colors.dark_cyan
    },
    b_light_lime: {
        borderColor: colors.light_lime
    },
    b_lime: {
        borderColor: colors.lime
    },
    b_dark_lime: {
        borderColor: colors.dark_lime
    },
    b_light_pink: {
        borderColor: colors.light_pink
    },
    b_pink: {
        borderColor: colors.pink
    },
    b_dark_pink: {
        borderColor: colors.dark_pink
    },
    b_light_teal: {
        borderColor: colors.light_teal
    },
    b_teal: {
        borderColor: colors.teal
    },
    b_dark_teal: {
        borderColor: colors.dark_teal
    },
    b_light_brown: {
        borderColor: colors.light_brown
    },
    b_brown: {
        borderColor: colors.brown
    },
    b_dark_brown: {
        borderColor: colors.dark_brown
    },

    bs_1: {
        borderStartWidth: 1
    },
    bs_2: {
        borderStartWidth: 2
    },
    bs_3: {
        borderStartWidth: 3
    },
    bs_4: {
        borderStartWidth: 4
    },
    bs_5: {
        borderStartWidth: 5
    },
    bs_light_green: {
        borderStartColor: colors.light_green
    },
    bs_green: {
        borderStartColor: colors.green
    },
    bs_dark_green: {
        borderStartColor: colors.dark_green
    },
    bs_light_blue: {
        borderStartColor: colors.light_blue
    },
    bs_blue: {
        borderStartColor: colors.blue
    },
    bs_dark_blue: {
        borderStartColor: colors.dark_blue
    },
    bs_light_red: {
        borderStartColor: colors.light_red
    },
    bs_red: {
        borderStartColor: colors.red
    },
    bs_dark_red: {
        borderStartColor: colors.dark_red
    },
    bs_light_orange: {
        borderStartColor: colors.light_orange
    },
    bs_orange: {
        borderStartColor: colors.orange
    },
    bs_dark_orange: {
        borderStartColor: colors.dark_orange
    },
    bs_light_yellow: {
        borderStartColor: colors.light_yellow
    },
    bs_yellow: {
        borderStartColor: colors.yellow
    },
    bs_dark_yellow: {
        borderStartColor: colors.dark_yellow
    },
    bs_light_purple: {
        borderStartColor: colors.light_purple
    },
    bs_purple: {
        borderStartColor: colors.purple
    },
    bs_dark_purple: {
        borderStartColor: colors.dark_purple
    },
    bs_white: {
        borderStartColor: colors.white
    },
    bs_light: {
        borderStartColor: colors.light
    },
    bs_gray: {
        borderStartColor: colors.gray
    },
    bs_dark: {
        borderStartColor: colors.dark
    },
    bs_black: {
        borderStartColor: colors.black
    },
    bs_light_cyan: {
        borderStartColor: colors.light_cyan
    },
    bs_cyan: {
        borderStartColor: colors.cyan
    },
    bs_dark_cyan: {
        borderStartColor: colors.dark_cyan
    },
    bs_light_lime: {
        borderStartColor: colors.light_lime
    },
    bs_lime: {
        borderStartColor: colors.lime
    },
    bs_dark_lime: {
        borderStartColor: colors.dark_lime
    },
    bs_light_pink: {
        borderStartColor: colors.light_pink
    },
    bs_pink: {
        borderStartColor: colors.pink
    },
    bs_dark_pink: {
        borderStartColor: colors.dark_pink
    },
    bs_light_teal: {
        borderStartColor: colors.light_teal
    },
    bs_teal: {
        borderStartColor: colors.teal
    },
    bs_dark_teal: {
        borderStartColor: colors.dark_teal
    },
    bs_light_brown: {
        borderStartColor: colors.light_brown
    },
    bs_brown: {
        borderStartColor: colors.brown
    },
    bs_dark_brown: {
        borderStartColor: colors.dark_brown
    },

    bt_1: {
        borderTopWidth: 1
    },
    bt_2: {
        borderTopWidth: 2
    },
    bt_3: {
        borderTopWidth: 3
    },
    bt_4: {
        borderTopWidth: 4
    },
    bt_5: {
        borderTopWidth: 5
    },
    bt_light_green: {
        borderTopColor: colors.light_green
    },
    bt_green: {
        borderTopColor: colors.green
    },
    bt_dark_green: {
        borderTopColor: colors.dark_green
    },
    bt_light_blue: {
        borderTopColor: colors.light_blue
    },
    bt_blue: {
        borderTopColor: colors.blue
    },
    bt_dark_blue: {
        borderTopColor: colors.dark_blue
    },
    bt_light_red: {
        borderTopColor: colors.light_red
    },
    bt_red: {
        borderTopColor: colors.red
    },
    bt_dark_red: {
        borderTopColor: colors.dark_red
    },
    bt_light_orange: {
        borderTopColor: colors.light_orange
    },
    bt_orange: {
        borderTopColor: colors.orange
    },
    bt_dark_orange: {
        borderTopColor: colors.dark_orange
    },
    bt_light_yellow: {
        borderTopColor: colors.light_yellow
    },
    bt_yellow: {
        borderTopColor: colors.yellow
    },
    bt_dark_yellow: {
        borderTopColor: colors.dark_yellow
    },
    bt_light_purple: {
        borderTopColor: colors.light_purple
    },
    bt_purple: {
        borderTopColor: colors.purple
    },
    bt_dark_purple: {
        borderTopColor: colors.dark_purple
    },
    bt_white: {
        borderTopColor: colors.white
    },
    bt_light: {
        borderTopColor: colors.light
    },
    bt_gray: {
        borderTopColor: colors.gray
    },
    bt_dark: {
        borderTopColor: colors.dark
    },
    bt_black: {
        borderTopColor: colors.black
    },
    bt_light_cyan: {
        borderTopColor: colors.light_cyan
    },
    bt_cyan: {
        borderTopColor: colors.cyan
    },
    bt_dark_cyan: {
        borderTopColor: colors.dark_cyan
    },
    bt_light_lime: {
        borderTopColor: colors.light_lime
    },
    bt_lime: {
        borderTopColor: colors.lime
    },
    bt_dark_lime: {
        borderTopColor: colors.dark_lime
    },
    bt_light_pink: {
        borderTopColor: colors.light_pink
    },
    bt_pink: {
        borderTopColor: colors.pink
    },
    bt_dark_pink: {
        borderTopColor: colors.dark_pink
    },
    bt_light_teal: {
        borderTopColor: colors.light_teal
    },
    bt_teal: {
        borderTopColor: colors.teal
    },
    bt_dark_teal: {
        borderTopColor: colors.dark_teal
    },
    bt_light_brown: {
        borderTopColor: colors.light_brown
    },
    bt_brown: {
        borderTopColor: colors.brown
    },
    bt_dark_brown: {
        borderTopColor: colors.dark_brown
    },

    br_1: {
        borderRightWidth: 1
    },
    br_2: {
        borderRightWidth: 2
    },
    br_3: {
        borderRightWidth: 3
    },
    br_4: {
        borderRightWidth: 4
    },
    br_5: {
        borderRightWidth: 5
    },
    br_light_green: {
        borderRightColor: colors.light_green
    },
    br_green: {
        borderRightColor: colors.green
    },
    br_dark_green: {
        borderRightColor: colors.dark_green
    },
    br_light_blue: {
        borderRightColor: colors.light_blue
    },
    br_blue: {
        borderRightColor: colors.blue
    },
    br_dark_blue: {
        borderRightColor: colors.dark_blue
    },
    br_light_red: {
        borderRightColor: colors.light_red
    },
    br_red: {
        borderRightColor: colors.red
    },
    br_dark_red: {
        borderRightColor: colors.dark_red
    },
    br_light_orange: {
        borderRightColor: colors.light_orange
    },
    br_orange: {
        borderRightColor: colors.orange
    },
    br_dark_orange: {
        borderRightColor: colors.dark_orange
    },
    br_light_yellow: {
        borderRightColor: colors.light_yellow
    },
    br_yellow: {
        borderRightColor: colors.yellow
    },
    br_dark_yellow: {
        borderRightColor: colors.dark_yellow
    },
    br_light_purple: {
        borderRightColor: colors.light_purple
    },
    br_purple: {
        borderRightColor: colors.purple
    },
    br_dark_purple: {
        borderRightColor: colors.dark_purple
    },
    br_white: {
        borderRightColor: colors.white
    },
    br_light: {
        borderRightColor: colors.light
    },
    br_gray: {
        borderRightColor: colors.gray
    },
    br_dark: {
        borderRightColor: colors.dark
    },
    br_black: {
        borderRightColor: colors.black
    },
    br_light_cyan: {
        borderRightColor: colors.light_cyan
    },
    br_cyan: {
        borderRightColor: colors.cyan
    },
    br_dark_cyan: {
        borderRightColor: colors.dark_cyan
    },
    br_light_lime: {
        borderRightColor: colors.light_lime
    },
    br_lime: {
        borderRightColor: colors.lime
    },
    br_dark_lime: {
        borderRightColor: colors.dark_lime
    },
    br_light_pink: {
        borderRightColor: colors.light_pink
    },
    br_pink: {
        borderRightColor: colors.pink
    },
    br_dark_pink: {
        borderRightColor: colors.dark_pink
    },
    br_light_teal: {
        borderRightColor: colors.light_teal
    },
    br_teal: {
        borderRightColor: colors.teal
    },
    br_dark_teal: {
        borderRightColor: colors.dark_teal
    },
    br_light_brown: {
        borderRightColor: colors.light_brown
    },
    br_brown: {
        borderRightColor: colors.brown
    },
    br_dark_brown: {
        borderRightColor: colors.dark_brown
    },

    bl_1: {
        borderLeftWidth: 1
    },
    bl_2: {
        borderLeftWidth: 2
    },
    bl_3: {
        borderLeftWidth: 3
    },
    bl_4: {
        borderLeftWidth: 4
    },
    bl_5: {
        borderLeftWidth: 5
    },
    bl_light_green: {
        borderLeftColor: colors.light_green
    },
    bl_green: {
        borderLeftColor: colors.green
    },
    bl_dark_green: {
        borderLeftColor: colors.dark_green
    },
    bl_light_blue: {
        borderLeftColor: colors.light_blue
    },
    bl_blue: {
        borderLeftColor: colors.blue
    },
    bl_dark_blue: {
        borderLeftColor: colors.dark_blue
    },
    bl_light_red: {
        borderLeftColor: colors.light_red
    },
    bl_red: {
        borderLeftColor: colors.red
    },
    bl_dark_red: {
        borderLeftColor: colors.dark_red
    },
    bl_light_orange: {
        borderLeftColor: colors.light_orange
    },
    bl_orange: {
        borderLeftColor: colors.orange
    },
    bl_dark_orange: {
        borderLeftColor: colors.dark_orange
    },
    bl_light_yellow: {
        borderLeftColor: colors.light_yellow
    },
    bl_yellow: {
        borderLeftColor: colors.yellow
    },
    bl_dark_yellow: {
        borderLeftColor: colors.dark_yellow
    },
    bl_light_purple: {
        borderLeftColor: colors.light_purple
    },
    bl_purple: {
        borderLeftColor: colors.purple
    },
    bl_dark_purple: {
        borderLeftColor: colors.dark_purple
    },
    bl_white: {
        borderLeftColor: colors.white
    },
    bl_light: {
        borderLeftColor: colors.light
    },
    bl_gray: {
        borderLeftColor: colors.gray
    },
    bl_dark: {
        borderLeftColor: colors.dark
    },
    bl_black: {
        borderLeftColor: colors.black
    },
    bl_light_cyan: {
        borderLeftColor: colors.light_cyan
    },
    bl_cyan: {
        borderLeftColor: colors.cyan
    },
    bl_dark_cyan: {
        borderLeftColor: colors.dark_cyan
    },
    bl_light_lime: {
        borderLeftColor: colors.light_lime
    },
    bl_lime: {
        borderLeftColor: colors.lime
    },
    bl_dark_lime: {
        borderLeftColor: colors.dark_lime
    },
    bl_light_pink: {
        borderLeftColor: colors.light_pink
    },
    bl_pink: {
        borderLeftColor: colors.pink
    },
    bl_dark_pink: {
        borderLeftColor: colors.dark_pink
    },
    bl_light_teal: {
        borderLeftColor: colors.light_teal
    },
    bl_teal: {
        borderLeftColor: colors.teal
    },
    bl_dark_teal: {
        borderLeftColor: colors.dark_teal
    },
    bl_light_brown: {
        borderLeftColor: colors.light_brown
    },
    bl_brown: {
        borderLeftColor: colors.brown
    },
    bl_dark_brown: {
        borderLeftColor: colors.dark_brown
    },

    bb_1: {
        borderBottomWidth: 1
    },
    bb_2: {
        borderBottomWidth: 2
    },
    bb_3: {
        borderBottomWidth: 3
    },
    bb_4: {
        borderBottomWidth: 4
    },
    bb_5: {
        borderBottomWidth: 5
    },
    bb_light_green: {
        borderBottomColor: colors.light_green
    },
    bb_green: {
        borderBottomColor: colors.green
    },
    bb_dark_green: {
        borderBottomColor: colors.dark_green
    },
    bb_light_blue: {
        borderBottomColor: colors.light_blue
    },
    bb_blue: {
        borderBottomColor: colors.blue
    },
    bb_dark_blue: {
        borderBottomColor: colors.dark_blue
    },
    bb_light_red: {
        borderBottomColor: colors.light_red
    },
    bb_red: {
        borderBottomColor: colors.red
    },
    bb_dark_red: {
        borderBottomColor: colors.dark_red
    },
    bb_light_orange: {
        borderBottomColor: colors.light_orange
    },
    bb_orange: {
        borderBottomColor: colors.orange
    },
    bb_dark_orange: {
        borderBottomColor: colors.dark_orange
    },
    bb_light_yellow: {
        borderBottomColor: colors.light_yellow
    },
    bb_yellow: {
        borderBottomColor: colors.yellow
    },
    bb_dark_yellow: {
        borderBottomColor: colors.dark_yellow
    },
    bb_light_purple: {
        borderBottomColor: colors.light_purple
    },
    bb_purple: {
        borderBottomColor: colors.purple
    },
    bb_dark_purple: {
        borderBottomColor: colors.dark_purple
    },
    bb_white: {
        borderBottomColor: colors.white
    },
    bb_light: {
        borderBottomColor: colors.light
    },
    bb_gray: {
        borderBottomColor: colors.gray
    },
    bb_dark: {
        borderBottomColor: colors.dark
    },
    bb_black: {
        borderBottomColor: colors.black
    },
    bb_light_cyan: {
        borderBottomColor: colors.light_cyan
    },
    bb_cyan: {
        borderBottomColor: colors.cyan
    },
    bb_dark_cyan: {
        borderBottomColor: colors.dark_cyan
    },
    bb_light_lime: {
        borderBottomColor: colors.light_lime
    },
    bb_lime: {
        borderBottomColor: colors.lime
    },
    bb_dark_lime: {
        borderBottomColor: colors.dark_lime
    },
    bb_light_pink: {
        borderBottomColor: colors.light_pink
    },
    bb_pink: {
        borderBottomColor: colors.pink
    },
    bb_dark_pink: {
        borderBottomColor: colors.dark_pink
    },
    bb_light_teal: {
        borderBottomColor: colors.light_teal
    },
    bb_teal: {
        borderBottomColor: colors.teal
    },
    bb_dark_teal: {
        borderBottomColor: colors.dark_teal
    },
    bb_light_brown: {
        borderBottomColor: colors.light_brown
    },
    bb_brown: {
        borderBottomColor: colors.brown
    },
    bb_dark_brown: {
        borderBottomColor: colors.dark_brown
    },

    be_1: {
        borderEndWidth: 1
    },
    be_2: {
        borderEndWidth: 2
    },
    be_3: {
        borderEndWidth: 3
    },
    be_4: {
        borderEndWidth: 4
    },
    be_5: {
        borderEndWidth: 5
    },
    be_light_green: {
        borderEndColor: colors.light_green
    },
    be_green: {
        borderEndColor: colors.green
    },
    be_dark_green: {
        borderEndColor: colors.dark_green
    },
    be_light_blue: {
        borderEndColor: colors.light_blue
    },
    be_blue: {
        borderEndColor: colors.blue
    },
    be_dark_blue: {
        borderEndColor: colors.dark_blue
    },
    be_light_red: {
        borderEndColor: colors.light_red
    },
    be_red: {
        borderEndColor: colors.red
    },
    be_dark_red: {
        borderEndColor: colors.dark_red
    },
    be_light_orange: {
        borderEndColor: colors.light_orange
    },
    be_orange: {
        borderEndColor: colors.orange
    },
    be_dark_orange: {
        borderEndColor: colors.dark_orange
    },
    be_light_yellow: {
        borderEndColor: colors.light_yellow
    },
    be_yellow: {
        borderEndColor: colors.yellow
    },
    be_dark_yellow: {
        borderEndColor: colors.dark_yellow
    },
    be_light_purple: {
        borderEndColor: colors.light_purple
    },
    be_purple: {
        borderEndColor: colors.purple
    },
    be_dark_purple: {
        borderEndColor: colors.dark_purple
    },
    be_white: {
        borderEndColor: colors.white
    },
    be_light: {
        borderEndColor: colors.light
    },
    be_gray: {
        borderEndColor: colors.gray
    },
    be_dark: {
        borderEndColor: colors.dark
    },
    be_black: {
        borderEndColor: colors.black
    },
    be_light_cyan: {
        borderEndColor: colors.light_cyan
    },
    be_cyan: {
        borderEndColor: colors.cyan
    },
    be_dark_cyan: {
        borderEndColor: colors.dark_cyan
    },
    be_light_lime: {
        borderEndColor: colors.light_lime
    },
    be_lime: {
        borderEndColor: colors.lime
    },
    be_dark_lime: {
        borderEndColor: colors.dark_lime
    },
    be_light_pink: {
        borderEndColor: colors.light_pink
    },
    be_pink: {
        borderEndColor: colors.pink
    },
    be_dark_pink: {
        borderEndColor: colors.dark_pink
    },
    be_light_teal: {
        borderEndColor: colors.light_teal
    },
    be_teal: {
        borderEndColor: colors.teal
    },
    be_dark_teal: {
        borderEndColor: colors.dark_teal
    },
    be_light_brown: {
        borderEndColor: colors.light_brown
    },
    be_brown: {
        borderEndColor: colors.brown
    },
    be_dark_brown: {
        borderEndColor: colors.dark_brown
    },

    b_radius_1: {
        borderRadius: 1
    },
    b_radius_2: {
        borderRadius: 2
    },
    b_radius_3: {
        borderRadius: 3
    },
    b_radius_4: {
        borderRadius: 4
    },
    b_radius_5: {
        borderRadius: 5
    },
    b_radius_6: {
        borderRadius: 6
    },
    b_radius_7: {
        borderRadius: 7
    },
    b_radius_8: {
        borderRadius: 8
    },
    b_radius_9: {
        borderRadius: 9
    },
    b_radius_10: {
        borderRadius: 10
    },
    b_radius_12: {
        borderRadius: 12
    },
    b_radius_15: {
        borderRadius: 15
    },
    b_radius_20: {
        borderRadius: 20
    },
    b_radius_25: {
        borderRadius: 25
    },
    b_radius_30: {
        borderRadius: 30
    },
    b_radius_40: {
        borderRadius: 40
    },
    b_radius_50: {
        borderRadius: 50
    },
    b_radius_100: {
        borderRadius: 100
    },

    bts_radius_1: {
        borderTopStartRadius: 1
    },
    bts_radius_2: {
        borderTopStartRadius: 2
    },
    bts_radius_3: {
        borderTopStartRadius: 3
    },
    bts_radius_4: {
        borderTopStartRadius: 4
    },
    bts_radius_5: {
        borderTopStartRadius: 5
    },
    bts_radius_6: {
        borderTopStartRadius: 6
    },
    bts_radius_7: {
        borderTopStartRadius: 7
    },
    bts_radius_8: {
        borderTopStartRadius: 8
    },
    bts_radius_9: {
        borderTopStartRadius: 9
    },
    bts_radius_10: {
        borderTopStartRadius: 10
    },
    bts_radius_12: {
        borderTopStartRadius: 12
    },
    bts_radius_15: {
        borderTopStartRadius: 15
    },
    bts_radius_20: {
        borderTopStartRadius: 20
    },
    bts_radius_25: {
        borderTopStartRadius: 25
    },
    bts_radius_30: {
        borderTopStartRadius: 30
    },
    bts_radius_40: {
        borderTopStartRadius: 40
    },
    bts_radius_50: {
        borderTopStartRadius: 50
    },
    bts_radius_100: {
        borderTopStartRadius: 100
    },

    btr_radius_1: {
        borderTopRightRadius: 1
    },
    btr_radius_2: {
        borderTopRightRadius: 2
    },
    btr_radius_3: {
        borderTopRightRadius: 3
    },
    btr_radius_4: {
        borderTopRightRadius: 4
    },
    btr_radius_5: {
        borderTopRightRadius: 5
    },
    btr_radius_6: {
        borderTopRightRadius: 6
    },
    btr_radius_7: {
        borderTopRightRadius: 7
    },
    btr_radius_8: {
        borderTopRightRadius: 8
    },
    btr_radius_9: {
        borderTopRightRadius: 9
    },
    btr_radius_10: {
        borderTopRightRadius: 10
    },
    btr_radius_12: {
        borderTopRightRadius: 12
    },
    btr_radius_15: {
        borderTopRightRadius: 15
    },
    btr_radius_20: {
        borderTopRightRadius: 20
    },
    btr_radius_25: {
        borderTopRightRadius: 25
    },
    btr_radius_30: {
        borderTopRightRadius: 30
    },
    btr_radius_40: {
        borderTopRightRadius: 40
    },
    btr_radius_50: {
        borderTopRightRadius: 50
    },
    btr_radius_100: {
        borderTopRightRadius: 100
    },

    btl_radius_1: {
        borderTopLeftRadius: 1
    },
    btl_radius_2: {
        borderTopLeftRadius: 2
    },
    btl_radius_3: {
        borderTopLeftRadius: 3
    },
    btl_radius_4: {
        borderTopLeftRadius: 4
    },
    btl_radius_5: {
        borderTopLeftRadius: 5
    },
    btl_radius_6: {
        borderTopLeftRadius: 6
    },
    btl_radius_7: {
        borderTopLeftRadius: 7
    },
    btl_radius_8: {
        borderTopLeftRadius: 8
    },
    btl_radius_9: {
        borderTopLeftRadius: 9
    },
    btl_radius_10: {
        borderTopLeftRadius: 10
    },
    btl_radius_12: {
        borderTopLeftRadius: 12
    },
    btl_radius_15: {
        borderTopLeftRadius: 15
    },
    btl_radius_20: {
        borderTopLeftRadius: 20
    },
    btl_radius_25: {
        borderTopLeftRadius: 25
    },
    btl_radius_30: {
        borderTopLeftRadius: 30
    },
    btl_radius_40: {
        borderTopLeftRadius: 40
    },
    btl_radius_50: {
        borderTopLeftRadius: 50
    },
    btl_radius_100: {
        borderTopLeftRadius: 100
    },

    bte_radius_1: {
        borderTopEndRadius: 1
    },
    bte_radius_2: {
        borderTopEndRadius: 2
    },
    bte_radius_3: {
        borderTopEndRadius: 3
    },
    bte_radius_4: {
        borderTopEndRadius: 4
    },
    bte_radius_5: {
        borderTopEndRadius: 5
    },
    bte_radius_6: {
        borderTopEndRadius: 6
    },
    bte_radius_7: {
        borderTopEndRadius: 7
    },
    bte_radius_8: {
        borderTopEndRadius: 8
    },
    bte_radius_9: {
        borderTopEndRadius: 9
    },
    bte_radius_10: {
        borderTopEndRadius: 10
    },
    bte_radius_12: {
        borderTopEndRadius: 12
    },
    bte_radius_15: {
        borderTopEndRadius: 15
    },
    bte_radius_20: {
        borderTopEndRadius: 20
    },
    bte_radius_25: {
        borderTopEndRadius: 25
    },
    bte_radius_30: {
        borderTopEndRadius: 30
    },
    bte_radius_40: {
        borderTopEndRadius: 40
    },
    bte_radius_50: {
        borderTopEndRadius: 50
    },
    bte_radius_100: {
        borderTopEndRadius: 100
    },

    bbs_radius_1: {
        borderBottomStartRadius: 1
    },
    bbs_radius_2: {
        borderBottomStartRadius: 2
    },
    bbs_radius_3: {
        borderBottomStartRadius: 3
    },
    bbs_radius_4: {
        borderBottomStartRadius: 4
    },
    bbs_radius_5: {
        borderBottomStartRadius: 5
    },
    bbs_radius_6: {
        borderBottomStartRadius: 6
    },
    bbs_radius_7: {
        borderBottomStartRadius: 7
    },
    bbs_radius_8: {
        borderBottomStartRadius: 8
    },
    bbs_radius_9: {
        borderBottomStartRadius: 9
    },
    bbs_radius_10: {
        borderBottomStartRadius: 10
    },
    bbs_radius_12: {
        borderBottomStartRadius: 12
    },
    bbs_radius_15: {
        borderBottomStartRadius: 15
    },
    bbs_radius_20: {
        borderBottomStartRadius: 20
    },
    bbs_radius_25: {
        borderBottomStartRadius: 25
    },
    bbs_radius_30: {
        borderBottomStartRadius: 30
    },
    bbs_radius_40: {
        borderBottomStartRadius: 40
    },
    bbs_radius_50: {
        borderBottomStartRadius: 50
    },
    bbs_radius_100: {
        borderBottomStartRadius: 100
    },

    bbr_radius_1: {
        borderBottomRightRadius: 1
    },
    bbr_radius_2: {
        borderBottomRightRadius: 2
    },
    bbr_radius_3: {
        borderBottomRightRadius: 3
    },
    bbr_radius_4: {
        borderBottomRightRadius: 4
    },
    bbr_radius_5: {
        borderBottomRightRadius: 5
    },
    bbr_radius_6: {
        borderBottomRightRadius: 6
    },
    bbr_radius_7: {
        borderBottomRightRadius: 7
    },
    bbr_radius_8: {
        borderBottomRightRadius: 8
    },
    bbr_radius_9: {
        borderBottomRightRadius: 9
    },
    bbr_radius_10: {
        borderBottomRightRadius: 10
    },
    bbr_radius_12: {
        borderBottomRightRadius: 12
    },
    bbr_radius_15: {
        borderBottomRightRadius: 15
    },
    bbr_radius_20: {
        borderBottomRightRadius: 20
    },
    bbr_radius_25: {
        borderBottomRightRadius: 25
    },
    bbr_radius_30: {
        borderBottomRightRadius: 30
    },
    bbr_radius_40: {
        borderBottomRightRadius: 40
    },
    bbr_radius_50: {
        borderBottomRightRadius: 50
    },
    bbr_radius_100: {
        borderBottomRightRadius: 100
    },

    bbl_radius_1: {
        borderBottomRightRadius: 1
    },
    bbl_radius_2: {
        borderBottomRightRadius: 2
    },
    bbl_radius_3: {
        borderBottomRightRadius: 3
    },
    bbl_radius_4: {
        borderBottomRightRadius: 4
    },
    bbl_radius_5: {
        borderBottomRightRadius: 5
    },
    bbl_radius_6: {
        borderBottomRightRadius: 6
    },
    bbl_radius_7: {
        borderBottomRightRadius: 7
    },
    bbl_radius_8: {
        borderBottomRightRadius: 8
    },
    bbl_radius_9: {
        borderBottomRightRadius: 9
    },
    bbl_radius_10: {
        borderBottomRightRadius: 10
    },
    bbl_radius_12: {
        borderBottomRightRadius: 12
    },
    bbl_radius_15: {
        borderBottomRightRadius: 15
    },
    bbl_radius_20: {
        borderBottomRightRadius: 20
    },
    bbl_radius_25: {
        borderBottomRightRadius: 25
    },
    bbl_radius_30: {
        borderBottomRightRadius: 30
    },
    bbl_radius_40: {
        borderBottomRightRadius: 40
    },
    bbl_radius_50: {
        borderBottomRightRadius: 50
    },
    bbl_radius_100: {
        borderBottomRightRadius: 100
    },

    bbe_radius_1: {
        borderBottomEndRadius: 1
    },
    bbe_radius_2: {
        borderBottomEndRadius: 2
    },
    bbe_radius_3: {
        borderBottomEndRadius: 3
    },
    bbe_radius_4: {
        borderBottomEndRadius: 4
    },
    bbe_radius_5: {
        borderBottomEndRadius: 5
    },
    bbe_radius_6: {
        borderBottomEndRadius: 6
    },
    bbe_radius_7: {
        borderBottomEndRadius: 7
    },
    bbe_radius_8: {
        borderBottomEndRadius: 8
    },
    bbe_radius_9: {
        borderBottomEndRadius: 9
    },
    bbe_radius_10: {
        borderBottomEndRadius: 10
    },
    bbe_radius_12: {
        borderBottomEndRadius: 12
    },
    bbe_radius_15: {
        borderBottomEndRadius: 15
    },
    bbe_radius_20: {
        borderBottomEndRadius: 20
    },
    bbe_radius_25: {
        borderBottomEndRadius: 25
    },
    bbe_radius_30: {
        borderBottomEndRadius: 30
    },
    bbe_radius_40: {
        borderBottomEndRadius: 40
    },
    bbe_radius_50: {
        borderBottomEndRadius: 50
    },
    bbe_radius_100: {
        borderBottomEndRadius: 100
    },

    b_dotted: {
        borderStyle: 'dotted'
    },
    b_dashed: {
        borderStyle: 'dashed'
    },

    light_green: {
        color: colors.light_green
    },
    green: {
        color: colors.green
    },
    dark_green: {
        color: colors.dark_green
    },
    light_blue: {
        color: colors.light_blue
    },
    blue: {
        color: colors.blue
    },
    dark_blue: {
        color: colors.dark_blue
    },
    light_red: {
        color: colors.light_red
    },
    red: {
        color: colors.red
    },
    dark_red: {
        color: colors.dark_red
    },
    light_orange: {
        color: colors.light_orange
    },
    orange: {
        color: colors.orange
    },
    dark_orange: {
        color: colors.dark_orange
    },
    light_yellow: {
        color: colors.light_yellow
    },
    yellow: {
        color: colors.yellow
    },
    dark_yellow: {
        color: colors.dark_yellow
    },
    light_purple: {
        color: colors.light_purple
    },
    purple: {
        color: colors.purple
    },
    dark_purple: {
        color: colors.dark_purple
    },
    white: {
        color: colors.white
    },
    light: {
        color: colors.light
    },
    gray: {
        color: colors.gray
    },
    dark: {
        color: colors.dark
    },
    black: {
        color: colors.black
    },

    light_cyan: {
        color: colors.light_cyan
    },
    cyan: {
        color: colors.cyan
    },
    dark_cyan: {
        color: colors.dark_cyan
    },
    light_lime: {
        color: colors.light_lime
    },
    lime: {
        color: colors.lime
    },
    dark_lime: {
        color: colors.dark_lime
    },
    light_pink: {
        color: colors.light_pink
    },
    pink: {
        color: colors.pink
    },
    dark_pink: {
        color: colors.dark_pink
    },
    light_teal: {
        color: colors.light_teal
    },
    teal: {
        color: colors.teal
    },
    dark_teal: {
        color: colors.dark_teal
    },
    light_brown: {
        color: colors.light_brown
    },
    brown: {
        color: colors.brown
    },
    dark_brown: {
        color: colors.dark_brown
    },

    bg_light_green: {
        backgroundColor: colors.light_green
    },
    bg_green: {
        backgroundColor: colors.green
    },
    bg_dark_green: {
        backgroundColor: colors.dark_green
    },
    bg_light_blue: {
        backgroundColor: colors.light_blue
    },
    bg_blue: {
        backgroundColor: colors.blue
    },
    bg_dark_blue: {
        backgroundColor: colors.dark_blue
    },
    bg_light_red: {
        backgroundColor: colors.light_red
    },
    bg_red: {
        backgroundColor: colors.red
    },
    bg_dark_red: {
        backgroundColor: colors.dark_red
    },
    bg_light_orange: {
        backgroundColor: colors.light_orange
    },
    bg_orange: {
        backgroundColor: colors.orange
    },
    bg_dark_orange: {
        backgroundColor: colors.dark_orange
    },
    bg_light_yellow: {
        backgroundColor: colors.light_yellow
    },
    bg_yellow: {
        backgroundColor: colors.yellow
    },
    bg_dark_yellow: {
        backgroundColor: colors.dark_yellow
    },
    bg_light_purple: {
        backgroundColor: colors.light_purple
    },
    bg_purple: {
        backgroundColor: colors.purple
    },
    bg_dark_purple: {
        backgroundColor: colors.dark_purple
    },
    bg_white: {
        backgroundColor: colors.white
    },
    bg_light: {
        backgroundColor: colors.light
    },
    bg_gray: {
        backgroundColor: colors.gray
    },
    bg_dark: {
        backgroundColor: colors.dark
    },
    bg_black: {
        backgroundColor: colors.black
    },
    bg_light_cyan: {
        backgroundColor: colors.light_cyan
    },
    bg_cyan: {
        backgroundColor: colors.cyan
    },
    bg_dark_cyan: {
        backgroundColor: colors.dark_cyan
    },
    bg_light_lime: {
        backgroundColor: colors.light_lime
    },
    bg_lime: {
        backgroundColor: colors.lime
    },
    bg_dark_lime: {
        backgroundColor: colors.dark_lime
    },
    bg_light_pink: {
        backgroundColor: colors.light_pink
    },
    bg_pink: {
        backgroundColor: colors.pink
    },
    bg_dark_pink: {
        backgroundColor: colors.dark_pink
    },
    bg_light_teal: {
        backgroundColor: colors.light_teal
    },
    bg_teal: {
        backgroundColor: colors.teal
    },
    bg_dark_teal: {
        backgroundColor: colors.dark_teal
    },
    bg_light_brown: {
        backgroundColor: colors.light_brown
    },
    bg_brown: {
        backgroundColor: colors.brown
    },
    bg_dark_brown: {
        backgroundColor: colors.dark_brown
    },

    o_01: {
        opacity: 0.1
    },
    o_02: {
        opacity: 0.2
    },
    o_03: {
        opacity: 0.3
    },
    o_04: {
        opacity: 0.4
    },
    o_05: {
        opacity: 0.5
    },
    o_06: {
        opacity: 0.6
    },
    o_07: {
        opacity: 0.7
    },
    o_08: {
        opacity: 0.8
    },
    o_09: {
        opacity: 0.9
    },
    o_1: {
        opacity: 1
    },

    of_visible: {
        overflow: 'visible'
    },
    of_hidden: {
        overflow: 'hidden'
    },
    of_scroll: {
        overflow: 'scroll'
    },

    resize_cover: {
        resizeMode: 'cover'
    },
    resize_contain: {
        resizeMode: 'contain'
    },
    resize_stretch: {
        resizeMode: 'stretch'
    },
    resize_repeat: {
        resizeMode: 'repeat'
    },
    resize_center: {
        resizeMode: 'center'
    },

    ac_flex_start: {
        alignContent: 'flex-start'
    },
    ac_flex_end: {
        alignContent: 'flex-end'
    },
    ac_center: {
        alignContent: 'center'
    },
    ac_stretch: {
        alignContent: 'stretch'
    },
    ac_space_between: {
        alignContent: 'space-between'
    },
    ac_space_around: {
        alignContent: 'space-around'
    },

    ai_flex_start: {
        alignItems: 'flex-start'
    },
    ai_flex_end: {
        alignItems: 'flex-end'
    },
    ai_center: {
        alignItems: 'center'
    },
    ai_stretch: {
        alignItems: 'stretch'
    },
    ai_baseline: {
        alignItems: 'baseline'
    },

    as_auto: {
        alignSelf: 'auto'
    },
    as_flex_start: {
        alignSelf: 'flex-start'
    },
    as_flex_end: {
        alignSelf: 'flex-end'
    },
    as_center: {
        alignSelf: 'center'
    },
    as_stretch: {
        alignSelf: 'stretch'
    },
    as_baseline: {
        alignSelf: 'baseline'
    },

    top_1: {
        top: 1
    },
    top_2: {
        top: 2
    },
    top_3: {
        top: 3
    },
    top_4: {
        top: 4
    },
    top_5: {
        top: 5
    },
    top_6: {
        top: 6
    },
    top_7: {
        top: 7
    },
    top_8: {
        top: 8
    },
    top_9: {
        top: 9
    },
    top_10: {
        top: 10
    },
    top_12: {
        top: 12
    },
    top_15: {
        top: 15
    },
    top_20: {
        top: 20
    },
    top_25: {
        top: 25
    },
    top_30: {
        top: 30
    },
    top_40: {
        top: 40
    },
    top_50: {
        top: 50
    },
    top_100: {
        top: 100
    },

    right_1: {
        right: 1
    },
    right_2: {
        right: 2
    },
    right_3: {
        right: 3
    },
    right_4: {
        right: 4
    },
    right_5: {
        right: 5
    },
    right_6: {
        right: 6
    },
    right_7: {
        right: 7
    },
    right_8: {
        right: 8
    },
    right_9: {
        right: 9
    },
    right_10: {
        right: 10
    },
    right_12: {
        right: 12
    },
    right_15: {
        right: 15
    },
    right_20: {
        right: 20
    },
    right_25: {
        right: 25
    },
    right_30: {
        right: 30
    },
    right_40: {
        right: 40
    },
    right_50: {
        right: 50
    },
    right_100: {
        right: 100
    },

    left_1: {
        left: 1
    },
    left_2: {
        left: 2
    },
    left_3: {
        left: 3
    },
    left_4: {
        left: 4
    },
    left_5: {
        left: 5
    },
    left_6: {
        left: 6
    },
    left_7: {
        left: 7
    },
    left_8: {
        left: 8
    },
    left_9: {
        left: 9
    },
    left_10: {
        left: 10
    },
    left_12: {
        left: 12
    },
    left_15: {
        left: 15
    },
    left_20: {
        left: 20
    },
    left_25: {
        left: 25
    },
    left_30: {
        left: 30
    },
    left_40: {
        left: 40
    },
    left_50: {
        left: 50
    },
    left_100: {
        left: 100
    },

    bottom_1: {
        bottom: 1
    },
    bottom_2: {
        bottom: 2
    },
    bottom_3: {
        bottom: 3
    },
    bottom_4: {
        bottom: 4
    },
    bottom_5: {
        bottom: 5
    },
    bottom_6: {
        bottom: 6
    },
    bottom_7: {
        bottom: 7
    },
    bottom_8: {
        bottom: 8
    },
    bottom_9: {
        bottom: 9
    },
    bottom_10: {
        bottom: 10
    },
    bottom_12: {
        bottom: 12
    },
    bottom_15: {
        bottom: 15
    },
    bottom_20: {
        bottom: 20
    },
    bottom_25: {
        bottom: 25
    },
    bottom_30: {
        bottom: 30
    },
    bottom_40: {
        bottom: 40
    },
    bottom_50: {
        bottom: 50
    },
    bottom_100: {
        bottom: 100
    },

    dir_inherit: {
        direction: 'inherit'
    },
    dir_right: {
        direction: 'rtl'
    },
    dir_left: {
        direction: 'ltr'
    },

    d_none: {
        display: 'none'
    },
    d_flex: {
        display: 'flex'
    },

    flex_1: {
        flex: 1
    },
    flex_2: {
        flex: 2
    },
    flex_3: {
        flex: 3
    },
    flex_4: {
        flex: 4
    },
    flex_5: {
        flex: 5
    },
    flex_6: {
        flex: 6
    },
    flex_7: {
        flex: 7
    },
    flex_8: {
        flex: 8
    },
    flex_9: {
        flex: 9
    },
    flex_10: {
        flex: 10
    },

    flex_row: {
        flexDirection: 'row'
    },
    flex_row_rev: {
        flexDirection: 'row-reverse'
    },
    flex_column: {
        flexDirection: 'column'
    },
    flex_column_rev: {
        flexDirection: 'column-reverse'
    },

    flex_wrap: {
        flexWrap: 'wrap'
    },
    flex_nowrap: {
        flexWrap: 'nowrap'
    },

    jc_flex_start: {
        justifyContent: 'flex-start'
    },
    jc_flex_end: {
        justifyContent: 'flex-end'
    },
    jc_center: {
        justifyContent: 'center'
    },
    jc_space_between: {
        justifyContent: 'space-between'
    },
    jc_space_around: {
        justifyContent: 'space-around'
    },
    jc_space_evenly: {
        justifyContent: 'space-evenly'
    },

    m_0: {
        margin: 0
    },
    m_1: {
        margin: 1
    },
    m_2: {
        margin: 2
    },
    m_3: {
        margin: 3
    },
    m_4: {
        margin: 4
    },
    m_5: {
        margin: 5
    },
    m_6: {
        margin: 6
    },
    m_7: {
        margin: 7
    },
    m_8: {
        margin: 8
    },
    m_9: {
        margin: 9
    },
    m_10: {
        margin: 10
    },
    m_12: {
        margin: 12
    },
    m_15: {
        margin: 15
    },
    m_20: {
        margin: 20
    },
    m_25: {
        margin: 25
    },
    m_30: {
        margin: 30
    },
    m_40: {
        margin: 40
    },
    m_50: {
        margin: 50
    },
    m_100: {
        margin: 100
    },
    nm_1: {
        margin: -1
    },
    nm_2: {
        margin: -2
    },
    nm_3: {
        margin: -3
    },
    nm_4: {
        margin: -4
    },
    nm_5: {
        margin: -5
    },
    nm_6: {
        margin: -6
    },
    nm_7: {
        margin: -7
    },
    nm_8: {
        margin: -8
    },
    nm_9: {
        margin: -9
    },
    nm_10: {
        margin: -10
    },
    nm_12: {
        margin: -12
    },
    nm_15: {
        margin: -15
    },
    nm_20: {
        margin: -20
    },
    nm_25: {
        margin: -25
    },
    nm_30: {
        margin: -30
    },
    nm_40: {
        margin: -40
    },
    nm_50: {
        margin: -50
    },
    nm_100: {
        margin: -100
    },

    ms_0: {
        marginStart: 0
    },
    ms_1: {
        marginStart: 1
    },
    ms_2: {
        marginStart: 2
    },
    ms_3: {
        marginStart: 3
    },
    ms_4: {
        marginStart: 4
    },
    ms_5: {
        marginStart: 5
    },
    ms_6: {
        marginStart: 6
    },
    ms_7: {
        marginStart: 7
    },
    ms_8: {
        marginStart: 8
    },
    ms_9: {
        marginStart: 9
    },
    ms_10: {
        marginStart: 10
    },
    ms_12: {
        marginStart: 12
    },
    ms_15: {
        marginStart: 15
    },
    ms_20: {
        marginStart: 20
    },
    ms_25: {
        marginStart: 25
    },
    ms_30: {
        marginStart: 30
    },
    ms_40: {
        marginStart: 40
    },
    ms_50: {
        marginStart: 50
    },
    ms_100: {
        marginStart: 100
    },
    nms_1: {
        marginStart: -1
    },
    nms_2: {
        marginStart: -2
    },
    nms_3: {
        marginStart: -3
    },
    nms_4: {
        marginStart: -4
    },
    nms_5: {
        marginStart: -5
    },
    nms_6: {
        marginStart: -6
    },
    nms_7: {
        marginStart: -7
    },
    nms_8: {
        marginStart: -8
    },
    nms_9: {
        marginStart: -9
    },
    nms_10: {
        marginStart: -10
    },
    nms_12: {
        marginStart: -12
    },
    nms_15: {
        marginStart: -15
    },
    nms_20: {
        marginStart: -20
    },
    nms_25: {
        marginStart: -25
    },
    nms_30: {
        marginStart: -30
    },
    nms_40: {
        marginStart: -40
    },
    nms_50: {
        marginStart: -50
    },
    nms_100: {
        marginStart: -100
    },

    me_0: {
        marginEnd: 0
    },
    me_1: {
        marginEnd: 1
    },
    me_2: {
        marginEnd: 2
    },
    me_3: {
        marginEnd: 3
    },
    me_4: {
        marginEnd: 4
    },
    me_5: {
        marginEnd: 5
    },
    me_6: {
        marginEnd: 6
    },
    me_7: {
        marginEnd: 7
    },
    me_8: {
        marginEnd: 8
    },
    me_9: {
        marginEnd: 9
    },
    me_10: {
        marginEnd: 10
    },
    me_12: {
        marginEnd: 12
    },
    me_15: {
        marginEnd: 15
    },
    me_20: {
        marginEnd: 20
    },
    me_25: {
        marginEnd: 25
    },
    me_30: {
        marginEnd: 30
    },
    me_40: {
        marginEnd: 40
    },
    me_50: {
        marginEnd: 50
    },
    me_100: {
        marginEnd: 100
    },
    nme_1: {
        marginEnd: -1
    },
    nme_2: {
        marginEnd: -2
    },
    nme_3: {
        marginEnd: -3
    },
    nme_4: {
        marginEnd: -4
    },
    nme_5: {
        marginEnd: -5
    },
    nme_6: {
        marginEnd: -6
    },
    nme_7: {
        marginEnd: -7
    },
    nme_8: {
        marginEnd: -8
    },
    nme_9: {
        marginEnd: -9
    },
    nme_10: {
        marginEnd: -10
    },
    nme_12: {
        marginEnd: -12
    },
    nme_15: {
        marginEnd: -15
    },
    nme_20: {
        marginEnd: -20
    },
    nme_25: {
        marginEnd: -25
    },
    nme_30: {
        marginEnd: -30
    },
    nme_40: {
        marginEnd: -40
    },
    nme_50: {
        marginEnd: -50
    },
    nme_100: {
        marginEnd: -100
    },

    mt_0: {
        marginTop: 0
    },
    mt_1: {
        marginTop: 1
    },
    mt_2: {
        marginTop: 2
    },
    mt_3: {
        marginTop: 3
    },
    mt_4: {
        marginTop: 4
    },
    mt_5: {
        marginTop: 5
    },
    mt_6: {
        marginTop: 6
    },
    mt_7: {
        marginTop: 7
    },
    mt_8: {
        marginTop: 8
    },
    mt_9: {
        marginTop: 9
    },
    mt_10: {
        marginTop: 10
    },
    mt_12: {
        marginTop: 12
    },
    mt_15: {
        marginTop: 15
    },
    mt_20: {
        marginTop: 20
    },
    mt_25: {
        marginTop: 25
    },
    mt_30: {
        marginTop: 30
    },
    mt_40: {
        marginTop: 40
    },
    mt_50: {
        marginTop: 50
    },
    mt_100: {
        marginTop: 100
    },
    nmt_1: {
        marginTop: -1
    },
    nmt_2: {
        marginTop: -2
    },
    nmt_3: {
        marginTop: -3
    },
    nmt_4: {
        marginTop: -4
    },
    nmt_5: {
        marginTop: -5
    },
    nmt_6: {
        marginTop: -6
    },
    nmt_7: {
        marginTop: -7
    },
    nmt_8: {
        marginTop: -8
    },
    nmt_9: {
        marginTop: -9
    },
    nmt_10: {
        marginTop: -10
    },
    nmt_12: {
        marginTop: -12
    },
    nmt_15: {
        marginTop: -15
    },
    nmt_20: {
        marginTop: -20
    },
    nmt_25: {
        marginTop: -25
    },
    nmt_30: {
        marginTop: -30
    },
    nmt_40: {
        marginTop: -40
    },
    nmt_50: {
        marginTop: -50
    },
    nmt_100: {
        marginTop: -100
    },

    mr_0: {
        marginRight: 0
    },
    mr_1: {
        marginRight: 1
    },
    mr_2: {
        marginRight: 2
    },
    mr_3: {
        marginRight: 3
    },
    mr_4: {
        marginRight: 4
    },
    mr_5: {
        marginRight: 5
    },
    mr_6: {
        marginRight: 6
    },
    mr_7: {
        marginRight: 7
    },
    mr_8: {
        marginRight: 8
    },
    mr_9: {
        marginRight: 9
    },
    mr_10: {
        marginRight: 10
    },
    mr_12: {
        marginRight: 12
    },
    mr_15: {
        marginRight: 15
    },
    mr_20: {
        marginRight: 20
    },
    mr_25: {
        marginRight: 25
    },
    mr_30: {
        marginRight: 30
    },
    mr_40: {
        marginRight: 40
    },
    mr_50: {
        marginRight: 50
    },
    mr_100: {
        marginRight: 100
    },
    nmr_1: {
        marginRight: -1
    },
    nmr_2: {
        marginRight: -2
    },
    nmr_3: {
        marginRight: -3
    },
    nmr_4: {
        marginRight: -4
    },
    nmr_5: {
        marginRight: -5
    },
    nmr_6: {
        marginRight: -6
    },
    nmr_7: {
        marginRight: -7
    },
    nmr_8: {
        marginRight: -8
    },
    nmr_9: {
        marginRight: -9
    },
    nmr_10: {
        marginRight: -10
    },
    nmr_12: {
        marginRight: -12
    },
    nmr_15: {
        marginRight: -15
    },
    nmr_20: {
        marginRight: -20
    },
    nmr_25: {
        marginRight: -25
    },
    nmr_30: {
        marginRight: -30
    },
    nmr_40: {
        marginRight: -40
    },
    nmr_50: {
        marginRight: -50
    },
    nmr_100: {
        marginRight: -100
    },

    ml_0: {
        marginLeft: 0
    },
    ml_1: {
        marginLeft: 1
    },
    ml_2: {
        marginLeft: 2
    },
    ml_3: {
        marginLeft: 3
    },
    ml_4: {
        marginLeft: 4
    },
    ml_5: {
        marginLeft: 5
    },
    ml_6: {
        marginLeft: 6
    },
    ml_7: {
        marginLeft: 7
    },
    ml_8: {
        marginLeft: 8
    },
    ml_9: {
        marginLeft: 9
    },
    ml_10: {
        marginLeft: 10
    },
    ml_12: {
        marginLeft: 12
    },
    ml_15: {
        marginLeft: 15
    },
    ml_20: {
        marginLeft: 20
    },
    ml_25: {
        marginLeft: 25
    },
    ml_30: {
        marginLeft: 30
    },
    ml_40: {
        marginLeft: 40
    },
    ml_50: {
        marginLeft: 50
    },
    ml_100: {
        marginLeft: 100
    },
    nml_1: {
        marginLeft: -1
    },
    nml_2: {
        marginLeft: -2
    },
    nml_3: {
        marginLeft: -3
    },
    nml_4: {
        marginLeft: -4
    },
    nml_5: {
        marginLeft: -5
    },
    nml_6: {
        marginLeft: -6
    },
    nml_7: {
        marginLeft: -7
    },
    nml_8: {
        marginLeft: -8
    },
    nml_9: {
        marginLeft: -9
    },
    nml_10: {
        marginLeft: -10
    },
    nml_12: {
        marginLeft: -12
    },
    nml_15: {
        marginLeft: -15
    },
    nml_20: {
        marginLeft: -20
    },
    nml_25: {
        marginLeft: -25
    },
    nml_30: {
        marginLeft: -30
    },
    nml_40: {
        marginLeft: -40
    },
    nml_50: {
        marginLeft: -50
    },
    nml_100: {
        marginLeft: -100
    },

    mb_0: {
        marginBottom: 0
    },
    mb_1: {
        marginBottom: 1
    },
    mb_2: {
        marginBottom: 2
    },
    mb_3: {
        marginBottom: 3
    },
    mb_4: {
        marginBottom: 4
    },
    mb_5: {
        marginBottom: 5
    },
    mb_6: {
        marginBottom: 6
    },
    mb_7: {
        marginBottom: 7
    },
    mb_8: {
        marginBottom: 8
    },
    mb_9: {
        marginBottom: 9
    },
    mb_10: {
        marginBottom: 10
    },
    mb_12: {
        marginBottom: 12
    },
    mb_15: {
        marginBottom: 15
    },
    mb_20: {
        marginBottom: 20
    },
    mb_25: {
        marginBottom: 25
    },
    mb_30: {
        marginBottom: 30
    },
    mb_40: {
        marginBottom: 40
    },
    mb_50: {
        marginBottom: 50
    },
    mb_100: {
        marginBottom: 100
    },
    nmb_1: {
        marginBottom: -1
    },
    nmb_2: {
        marginBottom: -2
    },
    nmb_3: {
        marginBottom: -3
    },
    nmb_4: {
        marginBottom: -4
    },
    nmb_5: {
        marginBottom: -5
    },
    nmb_6: {
        marginBottom: -6
    },
    nmb_7: {
        marginBottom: -7
    },
    nmb_8: {
        marginBottom: -8
    },
    nmb_9: {
        marginBottom: -9
    },
    nmb_10: {
        marginBottom: -10
    },
    nmb_12: {
        marginBottom: -12
    },
    nmb_15: {
        marginBottom: -15
    },
    nmb_20: {
        marginBottom: -20
    },
    nmb_25: {
        marginBottom: -25
    },
    nmb_30: {
        marginBottom: -30
    },
    nmb_40: {
        marginBottom: -40
    },
    nmb_50: {
        marginBottom: -50
    },
    nmb_100: {
        marginBottom: -100
    },

    mh_0: {
        marginHorizontal: 0
    },
    mh_1: {
        marginHorizontal: 1
    },
    mh_2: {
        marginHorizontal: 2
    },
    mh_3: {
        marginHorizontal: 3
    },
    mh_4: {
        marginHorizontal: 4
    },
    mh_5: {
        marginHorizontal: 5
    },
    mh_6: {
        marginHorizontal: 6
    },
    mh_7: {
        marginHorizontal: 7
    },
    mh_8: {
        marginHorizontal: 8
    },
    mh_9: {
        marginHorizontal: 9
    },
    mh_10: {
        marginHorizontal: 10
    },
    mh_12: {
        marginHorizontal: 12
    },
    mh_15: {
        marginHorizontal: 15
    },
    mh_20: {
        marginHorizontal: 20
    },
    mh_25: {
        marginHorizontal: 25
    },
    mh_30: {
        marginHorizontal: 30
    },
    mh_40: {
        marginHorizontal: 40
    },
    mh_50: {
        marginHorizontal: 50
    },
    mh_100: {
        marginHorizontal: 100
    },
    nmh_1: {
        marginHorizontal: -1
    },
    nmh_2: {
        marginHorizontal: -2
    },
    nmh_3: {
        marginHorizontal: -3
    },
    nmh_4: {
        marginHorizontal: -4
    },
    nmh_5: {
        marginHorizontal: -5
    },
    nmh_6: {
        marginHorizontal: -6
    },
    nmh_7: {
        marginHorizontal: -7
    },
    nmh_8: {
        marginHorizontal: -8
    },
    nmh_9: {
        marginHorizontal: -9
    },
    nmh_10: {
        marginHorizontal: -10
    },
    nmh_12: {
        marginHorizontal: -12
    },
    nmh_15: {
        marginHorizontal: -15
    },
    nmh_20: {
        marginHorizontal: -20
    },
    nmh_25: {
        marginHorizontal: -25
    },
    nmh_30: {
        marginHorizontal: -30
    },
    nmh_40: {
        marginHorizontal: -40
    },
    nmh_50: {
        marginHorizontal: -50
    },
    nmh_100: {
        marginHorizontal: -100
    },

    mv_0: {
        marginVertical: 0
    },
    mv_1: {
        marginVertical: 1
    },
    mv_2: {
        marginVertical: 2
    },
    mv_3: {
        marginVertical: 3
    },
    mv_4: {
        marginVertical: 4
    },
    mv_5: {
        marginVertical: 5
    },
    mv_6: {
        marginVertical: 6
    },
    mv_7: {
        marginVertical: 7
    },
    mv_8: {
        marginVertical: 8
    },
    mv_9: {
        marginVertical: 9
    },
    mv_10: {
        marginVertical: 10
    },
    mv_12: {
        marginVertical: 12
    },
    mv_15: {
        marginVertical: 15
    },
    mv_20: {
        marginVertical: 20
    },
    mv_25: {
        marginVertical: 25
    },
    mv_30: {
        marginVertical: 30
    },
    mv_40: {
        marginVertical: 40
    },
    mv_50: {
        marginVertical: 50
    },
    mv_100: {
        marginVertical: 100
    },
    nmv_1: {
        marginVertical: -1
    },
    nmv_2: {
        marginVertical: -2
    },
    nmv_3: {
        marginVertical: -3
    },
    nmv_4: {
        marginVertical: -4
    },
    nmv_5: {
        marginVertical: -5
    },
    nmv_6: {
        marginVertical: -6
    },
    nmv_7: {
        marginVertical: -7
    },
    nmv_8: {
        marginVertical: -8
    },
    nmv_9: {
        marginVertical: -9
    },
    nmv_10: {
        marginVertical: -10
    },
    nmv_12: {
        marginVertical: -12
    },
    nmv_15: {
        marginVertical: -15
    },
    nmv_20: {
        marginVertical: -20
    },
    nmv_25: {
        marginVertical: -25
    },
    nmv_30: {
        marginVertical: -30
    },
    nmv_40: {
        marginVertical: -40
    },
    nmv_50: {
        marginVertical: -50
    },
    nmv_100: {
        marginVertical: -100
    },

    p_0: {
        padding: 0
    },
    p_1: {
        padding: 1
    },
    p_2: {
        padding: 2
    },
    p_3: {
        padding: 3
    },
    p_4: {
        padding: 4
    },
    p_5: {
        padding: 5
    },
    p_6: {
        padding: 6
    },
    p_7: {
        padding: 7
    },
    p_8: {
        padding: 8
    },
    p_9: {
        padding: 9
    },
    p_10: {
        padding: 10
    },
    p_12: {
        padding: 12
    },
    p_15: {
        padding: 15
    },
    p_20: {
        padding: 20
    },
    p_25: {
        padding: 25
    },
    p_30: {
        padding: 30
    },
    p_40: {
        padding: 40
    },
    p_50: {
        padding: 50
    },
    p_100: {
        padding: 100
    },
    np_1: {
        padding: -1
    },
    np_2: {
        padding: -2
    },
    np_3: {
        padding: -3
    },
    np_4: {
        padding: -4
    },
    np_5: {
        padding: -5
    },
    np_6: {
        padding: -6
    },
    np_7: {
        padding: -7
    },
    np_8: {
        padding: -8
    },
    np_9: {
        padding: -9
    },
    np_10: {
        padding: -10
    },
    np_12: {
        padding: -12
    },
    np_15: {
        padding: -15
    },
    np_20: {
        padding: -20
    },
    np_25: {
        padding: -25
    },
    np_30: {
        padding: -30
    },
    np_40: {
        padding: -40
    },
    np_50: {
        padding: -50
    },
    np_100: {
        padding: -100
    },

    ps_0: {
        paddingStart: 0
    },
    ps_1: {
        paddingStart: 1
    },
    ps_2: {
        paddingStart: 2
    },
    ps_3: {
        paddingStart: 3
    },
    ps_4: {
        paddingStart: 4
    },
    ps_5: {
        paddingStart: 5
    },
    ps_6: {
        paddingStart: 6
    },
    ps_7: {
        paddingStart: 7
    },
    ps_8: {
        paddingStart: 8
    },
    ps_9: {
        paddingStart: 9
    },
    ps_10: {
        paddingStart: 10
    },
    ps_12: {
        paddingStart: 12
    },
    ps_15: {
        paddingStart: 15
    },
    ps_20: {
        paddingStart: 20
    },
    ps_25: {
        paddingStart: 25
    },
    ps_30: {
        paddingStart: 30
    },
    ps_40: {
        paddingStart: 40
    },
    ps_50: {
        paddingStart: 50
    },
    ps_100: {
        paddingStart: 100
    },
    nps_1: {
        paddingStart: -1
    },
    nps_2: {
        paddingStart: -2
    },
    nps_3: {
        paddingStart: -3
    },
    nps_4: {
        paddingStart: -4
    },
    nps_5: {
        paddingStart: -5
    },
    nps_6: {
        paddingStart: -6
    },
    nps_7: {
        paddingStart: -7
    },
    nps_8: {
        paddingStart: -8
    },
    nps_9: {
        paddingStart: -9
    },
    nps_10: {
        paddingStart: -10
    },
    nps_12: {
        paddingStart: -12
    },
    nps_15: {
        paddingStart: -15
    },
    nps_20: {
        paddingStart: -20
    },
    nps_25: {
        paddingStart: -25
    },
    nps_30: {
        paddingStart: -30
    },
    nps_40: {
        paddingStart: -40
    },
    nps_50: {
        paddingStart: -50
    },
    nps_100: {
        paddingStart: -100
    },

    pe_0: {
        paddingEnd: 0
    },
    pe_1: {
        paddingEnd: 1
    },
    pe_2: {
        paddingEnd: 2
    },
    pe_3: {
        paddingEnd: 3
    },
    pe_4: {
        paddingEnd: 4
    },
    pe_5: {
        paddingEnd: 5
    },
    pe_6: {
        paddingEnd: 6
    },
    pe_7: {
        paddingEnd: 7
    },
    pe_8: {
        paddingEnd: 8
    },
    pe_9: {
        paddingEnd: 9
    },
    pe_10: {
        paddingEnd: 10
    },
    pe_12: {
        paddingEnd: 12
    },
    pe_15: {
        paddingEnd: 15
    },
    pe_20: {
        paddingEnd: 20
    },
    pe_25: {
        paddingEnd: 25
    },
    pe_30: {
        paddingEnd: 30
    },
    pe_40: {
        paddingEnd: 40
    },
    pe_50: {
        paddingEnd: 50
    },
    pe_100: {
        paddingEnd: 100
    },
    npe_1: {
        paddingEnd: -1
    },
    npe_2: {
        paddingEnd: -2
    },
    npe_3: {
        paddingEnd: -3
    },
    npe_4: {
        paddingEnd: -4
    },
    npe_5: {
        paddingEnd: -5
    },
    npe_6: {
        paddingEnd: -6
    },
    npe_7: {
        paddingEnd: -7
    },
    npe_8: {
        paddingEnd: -8
    },
    npe_9: {
        paddingEnd: -9
    },
    npe_10: {
        paddingEnd: -10
    },
    npe_12: {
        paddingEnd: -12
    },
    npe_15: {
        paddingEnd: -15
    },
    npe_20: {
        paddingEnd: -20
    },
    npe_25: {
        paddingEnd: -25
    },
    npe_30: {
        paddingEnd: -30
    },
    npe_40: {
        paddingEnd: -40
    },
    npe_50: {
        paddingEnd: -50
    },
    npe_100: {
        paddingEnd: -100
    },

    pt_0: {
        paddingTop: 0
    },
    pt_1: {
        paddingTop: 1
    },
    pt_2: {
        paddingTop: 2
    },
    pt_3: {
        paddingTop: 3
    },
    pt_4: {
        paddingTop: 4
    },
    pt_5: {
        paddingTop: 5
    },
    pt_6: {
        paddingTop: 6
    },
    pt_7: {
        paddingTop: 7
    },
    pt_8: {
        paddingTop: 8
    },
    pt_9: {
        paddingTop: 9
    },
    pt_10: {
        paddingTop: 10
    },
    pt_12: {
        paddingTop: 12
    },
    pt_15: {
        paddingTop: 15
    },
    pt_20: {
        paddingTop: 20
    },
    pt_25: {
        paddingTop: 25
    },
    pt_30: {
        paddingTop: 30
    },
    pt_40: {
        paddingTop: 40
    },
    pt_50: {
        paddingTop: 50
    },
    pt_100: {
        paddingTop: 100
    },
    npt_1: {
        paddingTop: -1
    },
    npt_2: {
        paddingTop: -2
    },
    npt_3: {
        paddingTop: -3
    },
    npt_4: {
        paddingTop: -4
    },
    npt_5: {
        paddingTop: -5
    },
    npt_6: {
        paddingTop: -6
    },
    npt_7: {
        paddingTop: -7
    },
    npt_8: {
        paddingTop: -8
    },
    npt_9: {
        paddingTop: -9
    },
    npt_10: {
        paddingTop: -10
    },
    npt_12: {
        paddingTop: -12
    },
    npt_15: {
        paddingTop: -15
    },
    npt_20: {
        paddingTop: -20
    },
    npt_25: {
        paddingTop: -25
    },
    npt_30: {
        paddingTop: -30
    },
    npt_40: {
        paddingTop: -40
    },
    npt_50: {
        paddingTop: -50
    },
    npt_100: {
        paddingTop: -100
    },

    pr_0: {
        paddingRight: 0
    },
    pr_1: {
        paddingRight: 1
    },
    pr_2: {
        paddingRight: 2
    },
    pr_3: {
        paddingRight: 3
    },
    pr_4: {
        paddingRight: 4
    },
    pr_5: {
        paddingRight: 5
    },
    pr_6: {
        paddingRight: 6
    },
    pr_7: {
        paddingRight: 7
    },
    pr_8: {
        paddingRight: 8
    },
    pr_9: {
        paddingRight: 9
    },
    pr_10: {
        paddingRight: 10
    },
    pr_12: {
        paddingRight: 12
    },
    pr_15: {
        paddingRight: 15
    },
    pr_20: {
        paddingRight: 20
    },
    pr_25: {
        paddingRight: 25
    },
    pr_30: {
        paddingRight: 30
    },
    pr_40: {
        paddingRight: 40
    },
    pr_50: {
        paddingRight: 50
    },
    pr_100: {
        paddingRight: 100
    },
    npr_1: {
        paddingRight: -1
    },
    npr_2: {
        paddingRight: -2
    },
    npr_3: {
        paddingRight: -3
    },
    npr_4: {
        paddingRight: -4
    },
    npr_5: {
        paddingRight: -5
    },
    npr_6: {
        paddingRight: -6
    },
    npr_7: {
        paddingRight: -7
    },
    npr_8: {
        paddingRight: -8
    },
    npr_9: {
        paddingRight: -9
    },
    npr_10: {
        paddingRight: -10
    },
    npr_12: {
        paddingRight: -12
    },
    npr_15: {
        paddingRight: -15
    },
    npr_20: {
        paddingRight: -20
    },
    npr_25: {
        paddingRight: -25
    },
    npr_30: {
        paddingRight: -30
    },
    npr_40: {
        paddingRight: -40
    },
    npr_50: {
        paddingRight: -50
    },
    npr_100: {
        paddingRight: -100
    },

    pl_0: {
        paddingLeft: 0
    },
    pl_1: {
        paddingLeft: 1
    },
    pl_2: {
        paddingLeft: 2
    },
    pl_3: {
        paddingLeft: 3
    },
    pl_4: {
        paddingLeft: 4
    },
    pl_5: {
        paddingLeft: 5
    },
    pl_6: {
        paddingLeft: 6
    },
    pl_7: {
        paddingLeft: 7
    },
    pl_8: {
        paddingLeft: 8
    },
    pl_9: {
        paddingLeft: 9
    },
    pl_10: {
        paddingLeft: 10
    },
    pl_12: {
        paddingLeft: 12
    },
    pl_15: {
        paddingLeft: 15
    },
    pl_20: {
        paddingLeft: 20
    },
    pl_25: {
        paddingLeft: 25
    },
    pl_30: {
        paddingLeft: 30
    },
    pl_40: {
        paddingLeft: 40
    },
    pl_50: {
        paddingLeft: 50
    },
    pl_100: {
        paddingLeft: 100
    },
    npl_1: {
        paddingLeft: -1
    },
    npl_2: {
        paddingLeft: -2
    },
    npl_3: {
        paddingLeft: -3
    },
    npl_4: {
        paddingLeft: -4
    },
    npl_5: {
        paddingLeft: -5
    },
    npl_6: {
        paddingLeft: -6
    },
    npl_7: {
        paddingLeft: -7
    },
    npl_8: {
        paddingLeft: -8
    },
    npl_9: {
        paddingLeft: -9
    },
    npl_10: {
        paddingLeft: -10
    },
    npl_12: {
        paddingLeft: -12
    },
    npl_15: {
        paddingLeft: -15
    },
    npl_20: {
        paddingLeft: -20
    },
    npl_25: {
        paddingLeft: -25
    },
    npl_30: {
        paddingLeft: -30
    },
    npl_40: {
        paddingLeft: -40
    },
    npl_50: {
        paddingLeft: -50
    },
    npl_100: {
        paddingLeft: -100
    },

    pb_0: {
        paddingBottom: 0
    },
    pb_1: {
        paddingBottom: 1
    },
    pb_2: {
        paddingBottom: 2
    },
    pb_3: {
        paddingBottom: 3
    },
    pb_4: {
        paddingBottom: 4
    },
    pb_5: {
        paddingBottom: 5
    },
    pb_6: {
        paddingBottom: 6
    },
    pb_7: {
        paddingBottom: 7
    },
    pb_8: {
        paddingBottom: 8
    },
    pb_9: {
        paddingBottom: 9
    },
    pb_10: {
        paddingBottom: 10
    },
    pb_12: {
        paddingBottom: 12
    },
    pb_15: {
        paddingBottom: 15
    },
    pb_20: {
        paddingBottom: 20
    },
    pb_25: {
        paddingBottom: 25
    },
    pb_30: {
        paddingBottom: 30
    },
    pb_40: {
        paddingBottom: 40
    },
    pb_50: {
        paddingBottom: 50
    },
    pb_100: {
        paddingBottom: 100
    },
    npb_1: {
        paddingBottom: -1
    },
    npb_2: {
        paddingBottom: -2
    },
    npb_3: {
        paddingBottom: -3
    },
    npb_4: {
        paddingBottom: -4
    },
    npb_5: {
        paddingBottom: -5
    },
    npb_6: {
        paddingBottom: -6
    },
    npb_7: {
        paddingBottom: -7
    },
    npb_8: {
        paddingBottom: -8
    },
    npb_9: {
        paddingBottom: -9
    },
    npb_10: {
        paddingBottom: -10
    },
    npb_12: {
        paddingBottom: -12
    },
    npb_15: {
        paddingBottom: -15
    },
    npb_20: {
        paddingBottom: -20
    },
    npb_25: {
        paddingBottom: -25
    },
    npb_30: {
        paddingBottom: -30
    },
    npb_40: {
        paddingBottom: -40
    },
    npb_50: {
        paddingBottom: -50
    },
    npb_100: {
        paddingBottom: -100
    },

    ph_0: {
        paddingHorizontal: 0
    },
    ph_1: {
        paddingHorizontal: 1
    },
    ph_2: {
        paddingHorizontal: 2
    },
    ph_3: {
        paddingHorizontal: 3
    },
    ph_4: {
        paddingHorizontal: 4
    },
    ph_5: {
        paddingHorizontal: 5
    },
    ph_6: {
        paddingHorizontal: 6
    },
    ph_7: {
        paddingHorizontal: 7
    },
    ph_8: {
        paddingHorizontal: 8
    },
    ph_9: {
        paddingHorizontal: 9
    },
    ph_10: {
        paddingHorizontal: 10
    },
    ph_12: {
        paddingHorizontal: 12
    },
    ph_15: {
        paddingHorizontal: 15
    },
    ph_20: {
        paddingHorizontal: 20
    },
    ph_25: {
        paddingHorizontal: 25
    },
    ph_30: {
        paddingHorizontal: 30
    },
    ph_40: {
        paddingHorizontal: 40
    },
    ph_50: {
        paddingHorizontal: 50
    },
    ph_100: {
        paddingHorizontal: 100
    },
    nph_1: {
        paddingHorizontal: -1
    },
    nph_2: {
        paddingHorizontal: -2
    },
    nph_3: {
        paddingHorizontal: -3
    },
    nph_4: {
        paddingHorizontal: -4
    },
    nph_5: {
        paddingHorizontal: -5
    },
    nph_6: {
        paddingHorizontal: -6
    },
    nph_7: {
        paddingHorizontal: -7
    },
    nph_8: {
        paddingHorizontal: -8
    },
    nph_9: {
        paddingHorizontal: -9
    },
    nph_10: {
        paddingHorizontal: -10
    },
    nph_12: {
        paddingHorizontal: -12
    },
    nph_15: {
        paddingHorizontal: -15
    },
    nph_20: {
        paddingHorizontal: -20
    },
    nph_25: {
        paddingHorizontal: -25
    },
    nph_30: {
        paddingHorizontal: -30
    },
    nph_40: {
        paddingHorizontal: -40
    },
    nph_50: {
        paddingHorizontal: -50
    },
    nph_100: {
        paddingHorizontal: -100
    },

    pv_0: {
        paddingVertical: 0
    },
    pv_1: {
        paddingVertical: 1
    },
    pv_2: {
        paddingVertical: 2
    },
    pv_3: {
        paddingVertical: 3
    },
    pv_4: {
        paddingVertical: 4
    },
    pv_5: {
        paddingVertical: 5
    },
    pv_6: {
        paddingVertical: 6
    },
    pv_7: {
        paddingVertical: 7
    },
    pv_8: {
        paddingVertical: 8
    },
    pv_9: {
        paddingVertical: 9
    },
    pv_10: {
        paddingVertical: 10
    },
    pv_12: {
        paddingVertical: 12
    },
    pv_15: {
        paddingVertical: 15
    },
    pv_20: {
        paddingVertical: 20
    },
    pv_25: {
        paddingVertical: 25
    },
    pv_30: {
        paddingVertical: 30
    },
    pv_40: {
        paddingVertical: 40
    },
    pv_50: {
        paddingVertical: 50
    },
    pv_100: {
        paddingVertical: 100
    },
    npv_1: {
        paddingVertical: -1
    },
    npv_2: {
        paddingVertical: -2
    },
    npv_3: {
        paddingVertical: -3
    },
    npv_4: {
        paddingVertical: -4
    },
    npv_5: {
        paddingVertical: -5
    },
    npv_6: {
        paddingVertical: -6
    },
    npv_7: {
        paddingVertical: -7
    },
    npv_8: {
        paddingVertical: -8
    },
    npv_9: {
        paddingVertical: -9
    },
    npv_10: {
        paddingVertical: -10
    },
    npv_12: {
        paddingVertical: -12
    },
    npv_15: {
        paddingVertical: -15
    },
    npv_20: {
        paddingVertical: -20
    },
    npv_25: {
        paddingVertical: -25
    },
    npv_30: {
        paddingVertical: -30
    },
    npv_40: {
        paddingVertical: -40
    },
    npv_50: {
        paddingVertical: -50
    },
    npv_100: {
        paddingVertical: -100
    },

    absolute: {
        position: 'absolute'
    },
    relative: {
        position: 'relative'
    },

    z_last: {
        zIndex: -1
    },
    z_1: {
        zIndex: 1
    },
    z_2: {
        zIndex: 2
    },
    z_3: {
        zIndex: 3
    },
    z_4: {
        zIndex: 4
    },
    z_5: {
        zIndex: 5
    },
    z_6: {
        zIndex: 6
    },
    z_7: {
        zIndex: 7
    },
    z_8: {
        zIndex: 8
    },
    z_9: {
        zIndex: 9
    },
    z_10: {
        zIndex: 10
    },
    z_first: {
        zIndex: 10000
    },

    h_full: {
        height: height
    },
    h_0: {
        height: 0
    },
    h_1: {
        height: 1
    },
    h_2: {
        height: 2
    },
    h_3: {
        height: 3
    },
    h_4: {
        height: 4
    },
    h_5: {
        height: 5
    },
    h_6: {
        height: 6
    },
    h_7: {
        height: 7
    },
    h_8: {
        height: 8
    },
    h_9: {
        height: 9
    },
    h_10: {
        height: 10
    },
    h_12: {
        height: 12
    },
    h_15: {
        height: 15
    },
    h_20: {
        height: 20
    },
    h_25: {
        height: 25
    },
    h_30: {
        height: 30
    },
    h_40: {
        height: 40
    },
    h_50: {
        height: 50
    },
    h_100: {
        height: 100
    },
    h_150: {
        height: 150
    },
    h_200: {
        height: 200
    },
    h_250: {
        height: 250
    },
    h_300: {
        height: 300
    },

    w_full: {
        width: height
    },
    w_0: {
        width: 0
    },
    w_1: {
        width: 1
    },
    w_2: {
        width: 2
    },
    w_3: {
        width: 3
    },
    w_4: {
        width: 4
    },
    w_5: {
        width: 5
    },
    w_6: {
        width: 6
    },
    w_7: {
        width: 7
    },
    w_8: {
        width: 8
    },
    w_9: {
        width: 9
    },
    w_10: {
        width: 10
    },
    w_12: {
        width: 12
    },
    w_15: {
        width: 15
    },
    w_20: {
        width: 20
    },
    w_25: {
        width: 25
    },
    w_30: {
        width: 30
    },
    w_40: {
        width: 40
    },
    w_50: {
        width: 50
    },
    w_100: {
        width: 100
    },
    w_150: {
        width: 150
    },
    w_200: {
        width: 200
    },
    w_250: {
        width: 250
    },
    w_300: {
        width: 300
    },

    min_height_full: {
        minHeight: height
    },
    max_height_full: {
        maxHeight: height
    },

    container: {
        marginTop: 70,
        padding: 20
    },

    rounded: {
        borderRadius: 5
    },

    rounded_circle: {
        borderRadius: 100
    },

    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    shadow: {
        elevation: 10,
    }
});

export default carima;