<template>
    <div class="thank-you">
        <div class="svg-container">
            <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                <path d="M0,100 C150,180 350,0 500,120 L500,00 L0,0 Z" style="stroke: none; fill: #fff5f5"></path>
            </svg>
            <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                <path d="M0,100 C150,180 350,0 500,100 L500,00 L0,0 Z" style="stroke: none; fill: #ffc9c9"></path>
            </svg>
            <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                <path d="M0,100 C150,220 350,0 500,100 L500,00 L0,0 Z" style="stroke: none; fill: #ffdeeb"></path>
            </svg>
        </div>
        <div class="thank-you-inner">
            <font-awesome-icon class="icon" icon="fa-light fa-badge-check" />
            <h2>Thank you!</h2>
            <h3>You're now a member of our list of awesome people,</h3>
            <h3>We will message you back soon!</h3>
        </div>
    </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Yesteryear&display=swap');
@import url('@/styles.scss');

.thank-you {
    background-color: $light-color1;
    height: rem(500px);
    font-family: Roboto-Regular;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    border-radius: 12px;

    &-inner {
        padding: rem(24px);

        text-align: center;

        .icon {
            font-size: rem(52px);
            margin-block-end: rem(16px);
        }

        h2 {
            color: $dark-color;
            font-size: rem(64px);
            margin-bottom: rem(15px);
            font-family: Yesteryear, cursive;
        }

        h3 {
            font-size: rem(18px);
            color: $dark-color5;
        }
    }

    .svg-container {
        display: inline-block;
        position: relative;
        width: 100%;
        padding-bottom: 30%;
        vertical-align: middle;
        overflow: hidden;
        border-radius: 12px;

        svg {
            display: inline-block;
            position: absolute;
            top: 0;
            left: 0;

            &:nth-child(1) {
                fill-opacity: 0.9;
            }

            &:nth-child(2) {
                fill-opacity: 0.5;
            }

            &:nth-child(3) {
                fill-opacity: 0.5;
            }
        }
    }
}
</style>