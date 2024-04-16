import {describe, expect, it} from 'vitest';
import {createAvatarDom} from '../../../../../packages/shared/src/ui/Avatar/create';
import {AvatarProps} from '../../../../../packages/shared/src/ui/Avatar/props';
import {updateAvatarDom} from '../../../../../packages/shared/src/ui/Avatar/update';

describe('When an avatar component is rendered with HTML element as picture', () => {
    it('Should render the picture as is', () => {
        // Given
        const name = 'John Doe';
        const picture = document.createElement('img');
        picture.src = 'https://example.com/photo.jpg';
        const props: AvatarProps = {name, picture};

        // When
        const element = createAvatarDom(props);

        // Then
        expect(element.outerHTML).toBe(
            `<div class="nlux-comp-avtr" title="${name}"><img src="https://example.com/photo.jpg"></div>`,
        );
    });

    describe('When no picture or name is provided', () => {
        it('Should render an empty div', () => {
            // Given
            const props: AvatarProps = {};

            // When
            const element = createAvatarDom(props);

            // Then
            expect(element.outerHTML).toBe('<div class="nlux-comp-avtr"></div>');
        });
    });

    describe('When only name is provided', () => {
        it('Should render the name first letter', () => {
            // Given
            const name = 'John Doe';
            const props: AvatarProps = {name};

            // When
            const element = createAvatarDom(props);

            // Then
            expect(element.outerHTML).toBe(
                `<div class="nlux-comp-avtr" title="John Doe"><div class="avtr_ctn"><span class="avtr_ltr">J</span></div></div>`,
            );
        });
    });

    describe('When the picture element is updated', () => {
        it('Should render the new picture as is', () => {
            // Given
            const name = 'John Doe';
            const picture1 = document.createElement('img');
            picture1.src = 'https://example.com/photo1.jpg';
            const props: AvatarProps = {name, picture: picture1};
            const picture2 = document.createElement('img');
            picture2.src = 'https://example.com/photo2.jpg';
            const element = createAvatarDom(props);

            // When
            updateAvatarDom(
                element,
                props,
                {...props, picture: picture2},
            );

            // Then
            expect(element.outerHTML).toBe(
                `<div class="nlux-comp-avtr" title="${name}"><img src="https://example.com/photo2.jpg"></div>`,
            );
        });

        describe('When the new picture is a string', () => {
            it('Should render the new picture as URL', () => {
                // Given
                const name = 'John Doe';
                const picture1 = document.createElement('img');
                picture1.src = 'https://example.com/photo1.jpg';
                const props: AvatarProps = {
                    name,
                    picture: picture1,
                };
                const newProps: AvatarProps = {
                    name,
                    picture: 'https://example.com/photo2.jpg',
                };
                const picture2 = 'https://example.com/photo2.jpg';
                const element = createAvatarDom(props);

                // When
                updateAvatarDom(
                    element,
                    props,
                    newProps,
                );

                // Then
                expect(element.outerHTML).toBe(
                    `<div class="nlux-comp-avtr" title="John Doe"><div class="avtr_ctn">` +
                    `<span class="avtr_ltr">J</span>` +
                    `<div class="avtr_img" style="background-image: url(https://example.com/photo2.jpg);"></div>` +
                    `</div></div>`,
                );
            });

            it('Should render the new picture as URL and change name', () => {
                // Given
                const name = 'John Doe';
                const picture1 = document.createElement('img');
                picture1.src = 'https://example.com/photo1.jpg';
                const props: AvatarProps = {name, picture: picture1};
                const newProps: AvatarProps = {
                    name: 'Alex Doe',
                    picture: 'https://example.com/photo2.jpg',
                };
                const picture2 = 'https://example.com/photo2.jpg';
                const element = createAvatarDom(props);

                // When
                updateAvatarDom(
                    element,
                    props,
                    newProps,
                );

                // Then
                expect(element.outerHTML).toBe(
                    `<div class="nlux-comp-avtr" title="Alex Doe"><div class="avtr_ctn">` +
                    `<span class="avtr_ltr">A</span>` +
                    `<div class="avtr_img" style="background-image: url(https://example.com/photo2.jpg);"></div>` +
                    `</div></div>`,
                );
            });
        });
    });
});