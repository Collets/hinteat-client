import DbService from 'app/db/db.service';

/**
 * Fetch all cuisines and set their HTML.
 * @return {promise}
 */
export function get() {
  return DbService.fetchCuisines();
};
