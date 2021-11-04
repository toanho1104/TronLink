import React from 'react'
import { Text } from 'react-native'

import { useSelector } from 'react-redux'
import { colors, textStyles } from '../assets/styles'

const TextCom = ({
  children, headingLarge, headingMedium, headingSmall, textInput,
  linkTextBold, linkTextNomarl, buttonTextBold, buttonTextNomarl,
  contenTextBold, contenTextRegular, contenTextItalic, textPrimary,
  textSecondary, textOnPrimary, textOnSecondary, textBottomTab, style, ...props
}) => {
  // const theme = useSelector((state) => state.storage.theme)
  return (
    <Text
      style={[
        textPrimary && { color: colors.textPrimary },
        textSecondary && { color: colors.textSecondary },
        textOnPrimary && { color: colors.textOnPrimary },
        textOnSecondary && { color: colors.textOnSecondary },
        textPrimary && { color: colors.textPrimary },
        textSecondary && { color: colors.textSecondary },
        headingLarge && { ...textStyles.headingLarge },
        headingMedium && { ...textStyles.headingMedium },
        headingSmall && { ...textStyles.headingSmall },
        linkTextBold && { ...textStyles.linkTextBold },
        linkTextNomarl && { ...textStyles.linkTextNomarl },
        buttonTextBold && { ...textStyles.buttonTextBold },
        buttonTextNomarl && { ...textStyles.buttonTextNomarl },
        contenTextBold && { ...textStyles.contenTextBold },
        contenTextRegular && { ...textStyles.contenTextRegular },
        contenTextItalic && { ...textStyles.contenTextItalic },
        textInput && { ...textStyles.textInput, flex: 1 },
        textBottomTab && { color: colors.primary, ...textStyles.textBottomTab },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  )
}

export default TextCom
