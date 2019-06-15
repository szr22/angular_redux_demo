import { reducer } from './reducer';
import { FILTER_COURSES } from '../courses/course.action'

describe('Reducer', () => {
    it('should have the correct initial state', () => {
        const state = reducer(undefined, {});
        expect(state.courses.length).toBe(0);
        expect(state.filteredCourses.length).toBe(1);
    })
})