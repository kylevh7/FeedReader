$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('contains url', () => {
            for (let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        })

        it('contains url', () => {
            for (let the_name of allFeeds) {
                expect(the_name.name).toBeDefined();
                expect(the_name.name.length).not.toBe(0);
            }
        })

    });

    describe('The menu', () => {
        it('menu is hidden', () => {
            let body = document.querySelector('body');
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
        it('menu click test', () => {
            let body = document.querySelector('body');
            const menu = document.querySelector('.menu-icon-link');
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', () => {
        beforeEach((done) => {
            loadFeed(0, done);
        });
        it('loadFeed test', () => {
            const feed = document.querySelector('.entry');
            expect(feed.children.length > 0).toBe(true);
        });
    });

    describe('New Feed Selection', () => {
        const feed = document.querySelector('.feed');
        let feed1;
        let feed2;

        beforeEach((done) => {
            loadFeed(0, function() {
                feed1 = feed.children[0].innerText;
                loadFeed(1, () => {
                    feed2 = feed.children[0].innerText;
                    done();
                });
            });
        });

        it('feed is loaded', () => {
            expect(feed1).not.toEqual(feed2);        
        });
    });
}());
