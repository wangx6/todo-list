/**
 * @author Yinghan Wang
 * @date 03/03/2021
 * @licence MIT
 */

/**
 * lenRange
 * param str { string } - str whose length is going to be tested
 * param start { int } - the start of the range
 * param sInclusive { boolean } - true to include the start value
 * param end { int } - the end of the range
 * param eInclusive { boolean } - true to include the end value
 * return { boolean }
 */
export const lenRange = (str, start, sInclusive, end, eInclusive) => {
    if(typeof str !== 'string') throw new Error('String only');
    if(!Number.isInteger(start) || !Number.isInteger(end)) throw new Error('start and end can only be integer.');

    const ln = str.length;
    const low = sInclusive ? ln >= start : ln > start;
    const high = eInclusive ? ln <= end : ln < end;
    return low && high;
}

/**
 * 
 * param {  }
 * return {  }
 */
export const isStrEmpty = (str) => {
    if(typeof str !== 'string') throw new Error('String only');
    return str.trim() === '';
}

/**
 * 
 * param {  }
 * return {  }
 */
export const hasSpecialChar = (str) => {
    if(typeof str !== 'string') throw new Error('String only');
    const regex = /^[a-z A-Z 0-9]*$/g;
    return !regex.test(str);
}

/**
 * 
 * param {  }
 * return {  }
 */
export const hasNumber = (str) => {
    if(typeof str !== 'string') throw new Error('String only');
    const regex = /^.*\d+.*$/g;
    return regex.test(str);
}

/**
 * 
 * param {  }
 * return {  }
 */
export const isEmailValid = (email) => {
    if(typeof email !== 'string') throw new Error('String only');
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email).toLowerCase();
}

/**
 * 
 * param {  }
 * return {  }
 */
export const isNumberOnly = (str) => {
    if(typeof str !== 'string') throw new Error('String only');
    return /^\d+$/g.test(str);
}
