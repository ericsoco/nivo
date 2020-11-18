/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { scaleBand } from 'd3-scale'

/**
 * Generates indexed scale.
 *
 * @param {Array.<Object>} data
 * @param {Function}       getIndex
 * @param {Array.<number>} range
 * @param {number}         padding
 * @Param {scalePropType}  indexScale
 * @returns {Function}
 */
export const getIndexedScale = (data, getIndex, range, padding, indexScale) => {
    const scale = scaleBand().domain(data.map(getIndex)).padding(padding)
    return indexScale.round ? scale.rangeRound(range) : scale.range(range)
}

export const normalizeData = (data, keys) =>
    data.map(item => ({
        ...keys.reduce((acc, key) => ({ ...acc, [key]: null }), {}),
        ...item,
    }))

export const filterNullValues = data =>
    Object.keys(data).reduce((acc, key) => (data[key] ? { ...acc, [key]: data[key] } : acc), {})
