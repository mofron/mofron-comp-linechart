/**
 * @file mofron-comp-linechart/index.js
 * @brief chart component for mofron
 *        it is base module of chart, user don't use this module directly
 * @license MIT
 */
const Chart = require("mofron-comp-chart");

module.exports = class extends Chart {
    /**
     * initialize component
     * 
     * @param (key-value) component config
     * @short data
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.name("LineChart");
	    /* set config */
	    if (undefined !== prm) {
                this.config(prm);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    /**
     * chart data setter/getter
     * 
     * @param (key-value) chart data { key: values([{ x: number, y: number },..]) }
     *                    undefined: call as getter
     * @return (mixed) object: chart data
     *                 null: not set
     * @type parameter
     */
    data (prm) {
        try {
	    let ret = super.data(prm);
            if (undefined !== prm) {
                /* setter */
                for (let pidx in prm) {
                    for (let vidx in prm[pidx].values) {
                        if ( ('number' !== typeof prm[pidx].values[vidx].x) ||
			     ('number' !== typeof prm[pidx].values[vidx].y) ) {
                            throw new Error("invalid parameter");
			}
		    }
		}
	    }
            return ret;
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
}
/* end of file */
