'use strict';

/**
 * challenge service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::challenge.challenge');
