import { describe, it, expect } from 'vitest';
import {Button} from "@shared/ui/Button/Button";
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';

declare module 'vitest' {
    interface Assertion<T = any> {
        toBeInTheDocument(): void;
    }
}

describe('classNames', () => {
    it('with only first params', () => {
        render(<Button>TEST</Button>);
        expect(screen. getByText("TEST")).toBeInTheDocument();
    });


});
