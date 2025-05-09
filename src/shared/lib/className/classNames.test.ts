import { describe, it, expect } from 'vitest';
import { classNames } from '@shared/lib/className/className';

describe('classNames', () => {
    it('with only first params', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    it('with additional class', () => {
        const expectedClass = 'someClass class1 class2 hovered scrollable';
        expect(classNames('someClass', {hovered:true, scrollable:true}, ['class1', 'class2'])).toBe(expectedClass);
    });
});
