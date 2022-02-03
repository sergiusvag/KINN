"use strict";



$(document).ready(function(){
    $('.hamburger').click(function() {
        $('.options').toggle('active');
    });
    
    let languages;
    
    fetch('./js/languages.json')
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        // console.log(data);
        languages = data;
        
        const en = "en";
        const ru = "ru";

        // console.log(languages[en]);
        // console.log(languages[ru]);
    }); 
    
    $('.langauge-en').click(function(e) {
        var target = $(e.target);
        changeLanguage(target[0].innerHTML);
    })
    $('.langauge-ru').click(function(e) {
        var target = $(e.target);
        changeLanguage(target[0].innerHTML);
    })

    function changeSpanLinks(DOMObject, textToChange){
        console.log(DOMObject[0].innerHTML);
        for(let i = 0; i < DOMObject.length; i++) {
            DOMObject[i].innerHTML = (textToChange);
        }
    }

    function changeLanguage(lang) {
        // Header
        // Links (Header and Footer)
        changeSpanLinks($('.span-shop'), languages[lang]["Shop"]);
        changeSpanLinks($('.span-style'), languages[lang]["Style Quiz"]);
        changeSpanLinks($('.span-about'), languages[lang]["About Us"]);
        changeSpanLinks($('.span-stories'), languages[lang]["Stories"]);
        // Offer
        $('.offer-content__title_mini').text(languages[lang]["All Collections"]);
        $('.offer-content__title').text(languages[lang]["Elevate Your Everyday"]);
        $('.btn_offer').text(languages[lang]["Shop now"]);
        // Description
        $('.description-content__paragraph').text(languages[lang]["description-paragraph"]);
        $('.link-shop-all').text(languages[lang]["link-shop-all"]);
        $('.link-read-stories').text(languages[lang]["link-read-stories"]);
        // Collection
        $('.collection-content__title').text(languages[lang]["collection-title"]);
        $('.card__title_short').text(languages[lang]["card-title-short"]);
        $('.card__title_long').text(languages[lang]["card-title-long"]);
        $('.card__title_wide').text(languages[lang]["card-title-wide"]);
        // Essentials
        $('.essentials-content__title').text(languages[lang]["essentials-title"]);
        $('.essentials-content__paragraph').text(languages[lang]["essentials-paragraph"]);
        // About
        $('.about-card__title_design-story').text(languages[lang]["about-title-design-story"]);
        $('.about-card__text_design-story').text(languages[lang]["about-text-design-story"]);
        $('.about-card__title_table-time').text(languages[lang]["about-title-table-time"]);
        $('.about-card__text_table-time').text(languages[lang]["about-text-table-time"]);
        // Newsletter
        $('.newsletter-content__title').text(languages[lang]["newsletter-title"]);
        $('.newsletter-content__text').text(languages[lang]["newsletter-text"]);
        $('.btn_subscribe').text(languages[lang]["btn-subscribe"]);
        // KinnMoments
        // Footer
        $('.footer-data__text').text(languages[lang]["footer-text"]);
        $('.footer-data__head_explore').text(languages[lang]["footer-head-explore"]);
        $('.footer-data__head_help').text(languages[lang]["footer-head-help"]);
        $('.link-faqs').text(languages[lang]["link-faqs"]);
        $('.link-contact').text(languages[lang]["link-contact"]);
        $('.link-terms').text(languages[lang]["link-terms"]);
        $('.link-trade').text(languages[lang]["link-trade"]);

    }
});