<template>
    <div class="card">
        <div class="imgBox">
            <img src="https://desarrolloweb.com/storage/serie_images/javascript.png" alt="">
        </div>
        <div class="content">
            <div>
                <h2>Technology</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vel, esse quia ullam nihil tempora excepturi reiciendis libero maiores veritatis ex odit, sed, saepe inventore assumenda repudiandae alias earum quis?</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card{
    position: relative;
    display: flex;
    flex-direction: column;
    background: #fff;
}
.imgBox{
    position: relative;
    width: 250px;
    height: 250px;
    background: #000;
}
.imgBox img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.content{
    position: relative;
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.content div{
    padding: 20px;
    text-align: center;
}

@media (max-width: 1000px) {
    .card{
        flex-direction: row;
        margin: 10px 0;
    }
    .imgBox, .content{
        width: 50%;
    }
}
@media (max-width: 600px) {
    .card{
        flex-direction: column;
        margin: 10px 0;
    }
    .imgBox, .content{
        width: 100%;
    }
    .content{
        height: 200px;
    }
}
</style>