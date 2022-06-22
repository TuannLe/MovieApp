import { Platform, StyleSheet, StatusBar } from 'react-native'
import React from 'react'

export default StyleSheet.create({
    AndroidSafeArea: {
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0
    }
})
