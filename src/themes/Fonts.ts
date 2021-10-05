const family = {
    thin: 'Inter-Thin', // 100
    extraLight: 'Inter-ExtraLight', // 200
    light: 'Inter-Light', // 300
    regular: 'Inter-Regular', // 400
    medium: 'Inter-Medium', // 500
    semiBold: 'Inter-SemiBold', // 600
    bold: 'Inter-Bold', // 700
    extraBold: 'Inter-ExtraBold', // 800
    black: 'Inter-Black', // 900

    // italic
    thinItalic: 'Inter-ThinItalic',
    extraLightItalic: 'Inter-ExtraLightItalic',
    lightItalic: 'Inter-LightItalic',
    italic: 'Inter-Italic',
    mediumItalic: 'Inter-MediumItalic',
    semiBoldItalic: 'Inter-SemiBoldItalic',
    boldItalic: 'Inter-BoldItalic',
    extraBoldItalic: 'Inter-ExtraBoldItalic',
    blackItalic: 'Inter-BlackItalic',
};

const size = {
    h1: 38,
    h2: 34,
    h3: 30,
    h4: 26,
    h5: 20,
    h6: 19,
    input: 18,
    large: 32,
    regular: 17,
    medium: 15,
    small2: 13,
    small: 12,
    xSmall: 11,
    tiny: 8,
};

const style = {
    h1: {
        fontFamily: family.regular,
        fontSize: size.h1,
    },
    h2: {
        fontFamily: family.bold,
        fontSize: size.h2,
    },
    h3: {
        fontFamily: family.regular,
        fontSize: size.h3,
    },
    h4: {
        fontFamily: family.regular,
        fontSize: size.h4,
    },
    h5: {
        fontFamily: family.regular,
        fontSize: size.h5,
    },
    h6: {
        fontFamily: family.regular,
        fontSize: size.h6,
    },
    normal: {
        fontFamily: family.regular,
        fontSize: size.regular,
    },
    description: {
        fontFamily: family.regular,
        fontSize: size.medium,
    },
};

export default {
    family,
    size,
    style,
};
