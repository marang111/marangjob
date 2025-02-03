$(document).ready(function () {
    
    $(".itemlist").on("click", function () {
    const targetId = $(this).data("content"); 
    const targetBox = $(`#${targetId}`);

    // 현재 클릭한 itemlist의 contentsbox가 이미 보이고 있으면 숨기고, 아니면 보이게 함
    if (targetBox.hasClass("hidden")) {
        $(".contentsbox").addClass("hidden"); // 모든 contentsbox 숨기기
        targetBox.removeClass("hidden"); // 해당 contentsbox 보이기
    } else {
        targetBox.addClass("hidden"); // 다시 클릭하면 숨기기
    }
});

    $(".toggle1").click(function(){
        $(".togglee1").slideToggle(300);
        $(".toggle1 span").toggle(0);

    });
    $(".toggle2").click(function(){
        $(".togglee2").slideToggle(400);
        $(".toggle2 span").toggle(0);
        $(".contentsbox").addClass("hidden").removeClass("visible"); // 모든 contentsbox 숨기기
    });
    $(".toggle3").click(function(){
        $(".togglee3").slideToggle(400);
    });


    // 외부 클릭 시 모든 contentsbox 숨기기
    $(document).on("click", function (event) {
        if (!$(event.target).closest(".itemlist, .contentsbox").length) {
            $(".contentsbox").addClass("hidden").removeClass("visible");
        }
    });

    $('.itemlist').click(function() {
    // 클릭한 요소가 이미 active 클래스를 가지고 있다면
    if ($(this).hasClass("active")) {
        // active 클래스를 제거하고 원래 색으로 복원
        $(this).removeClass("active");
    } else {
        // 다른 .itemlist에서 active 클래스를 제거하고 원래 색으로 복원
        $('.itemlist').removeClass("active");

        // 클릭한 요소에만 active 클래스를 추가하고 색을 red로 변경
        $(this).addClass("active");
    }
});

    // 각 뷰어에 대한 이미지 데이터
    const viewerData = {
        viewer1: {
            images: [
                { img: 'img/fire/1.png'},
                { img: 'img/fire/2.png'},
                { img: 'img/fire/3.png'},
                { img: 'img/fire/4.png'},
                { img: 'img/fire/5.png'},
                { img: 'img/fire/7.png'},
                { img: 'img/fire/8.png'},
                { img: 'img/fire/9.png'},
                { img: 'img/fire/10.png'},
                { img: 'img/fire/13.png'}

            ],
            currentPage: 0,
            itemsPerPage: 3
        },
        viewer2: {
            images: [
                { img: 'img/wolpos/L1880508.jpg'},
                { img: 'img/wolpos/L1880524.jpg'},
                { img: 'img/wolpos/L1880442.jpg'},
                { img: 'img/wolpos/L1880469.jpg'},

                { img: 'img/wolpos/DSC_9970.jpg'},
                { img: 'img/wolpos/L1880507.jpg'},
                { img: 'img/wolpos/L1880438.jpg'},
                { img: 'img/wolpos/L1880463.jpg'},

                { img: 'img/wolpos/L1010835.jpg'},
                { img: 'img/wolpos/L1010719.jpg'},
                { img: 'img/wolpos/L1010768.jpg'},
                { img: 'img/wolpos/L1010723.jpg'},

                { img: 'img/wolpos/L1880615.jpg'},
                { img: 'img/wolpos/ss.jpg'},
                { img: 'img/wolpos/sdfsdf.jpg'},
                { img: 'img/wolpos/wewww.jpg'},

                { img: 'img/wolpos/we.jpg'},
                { img: 'img/wolpos/fpogd.jpg'},
                { img: 'img/wolpos/z.jpg'},
                { img: 'img/wolpos/www.jpg'},

                { img: 'img/wolpos/L1880410.jpg'},
                { img: 'img/wolpos/ds.jpg'},
                { img: 'img/wolpos/L1880617.jpg'},
                { img: 'img/wolpos/ddsdo.jpg'},

                { img: 'img/wolpos/L1880947.jpg'},
                { img: 'img/wolpos/L1880954.jpg'},
                { img: 'img/wolpos/L1880399.jpg'},
                { img: 'img/wolpos/L1010555_p.jpg'},

                { img: 'img/wolpos/L1880477.jpg'},
                { img: 'img/wolpos/L1880573.jpg'}

            ],
            currentPage: 0,
            itemsPerPage: 4
        },
        viewer3: {
            images: [
                { img: 'img/trasse/set00518.jpg'},
                { img: 'img/trasse/L1000292.jpg'},

                { img: 'img/trasse/L1000307.jpg'},

                { img: 'img/trasse/set00702.jpg'},
                { img: 'img/trasse/set00707.jpg'},

                { img: 'img/trasse/set00634.jpg'},
                { img: 'img/trasse/set00491.jpg'},

                { img: 'img/trasse/set00502.jpg'},
                { img: 'img/trasse/1.png'},

                { img: 'img/trasse/set00653.jpg'}
            ],
            currentPage: 0,
            itemsPerPage: 2
        },
        viewer4: {
            images: [
                { img: 'img/ka/1.png', textId: 'text-7-1' }
            ],
            currentPage: 0,
            itemsPerPage: 1
        },
        viewer5: {
            images: [
                { img: 'img/soopy/7fe2713a-ffe6-4a8a-8bcf-8756f9c1a438.jpg', textId: 'text-7-1' }
            ],
            currentPage: 0,
            itemsPerPage: 1
        },
        viewer6: {
            images: [
                { img: 'img/1129/3.png'},
                { img: 'img/1129/4.png'},
                { img: 'img/1129/5.png', textId: 'text-6-1' },
                { img: 'img/1129/6.png', textId: 'text-6-1' },
                { img: 'img/1129/8.png', textId: 'text-6-2' },
                { img: 'img/1129/9.png', textId: 'text-6-2' },
                { img: 'img/1129/10.png', textId: 'text-6-3' },
                { img: 'img/1129/13.png', textId: 'text-6-3' },
                { img: 'img/1129/12.png', textId: 'text-6-4' },
                { img: 'img/1129/13.png', textId: 'text-6-4' },
                { img: 'img/1129/14.png', textId: 'text-6-6' }
            ],
            currentPage: 0,
            itemsPerPage: 2
        },
        viewer7: {
            images: [
                { img: 'img/visa/visasvi.png' }
            ],
            currentPage: 0,
            itemsPerPage: 2
        },
        viewer8: {
            images: [
                { img: 'img/carot/3.png'}
            ],
            currentPage: 0,
            itemsPerPage: 2
        },
        viewer9: {
            images: [
                { img: 'img/soon/3.png'}
            ],
            currentPage: 0,
            itemsPerPage: 2
        },
        // viewer10: {
        //     images: [
        //         { img: 'img/letter/3.png'}
        //     ],
        //     currentPage: 0,
        //     itemsPerPage: 2
        // },
        // viewer11: {
        //     images: [
        //         { img: 'img/candle/qweqwe.png'},
        //         { img: 'img/candle/IMG_1869.png'},
        //         { img: 'img/candle/egku.png'},
        //         { img: 'img/candle/sd.png'},
        //         { img: 'img/candle/6bc10fe1a7c93.jpg'},
        //         { img: 'img/candle/4.stl'},
        //         { img: 'img/candle/IMG_1869.png'},
        //         { img: 'img/candle/IMG_1869.png'},
        //     ],
        //     currentPage: 0,
        //     itemsPerPage: 2
        // },
        // viewer12: {
        //     images: [
        //         { img: 'img/candle/qweqwe.png'},
        //         { img: 'img/candle/IMG_1869.png'},
        //         { img: 'img/candle/egku.png'},
        //         { img: 'img/candle/sd.png'},
        //         { img: 'img/candle/6bc10fe1a7c93.jpg'},
        //         { img: 'img/candle/4.stl'},
        //         { img: 'img/candle/IMG_1869.png'},
        //         { img: 'img/candle/IMG_1869.png'},
        //     ],
        //     currentPage: 0,
        //     itemsPerPage: 2
        // },
        // viewer13: {
        //     images: [
        //         { img: 'img/11/1ds.png'}
        //     ],
        //     currentPage: 0,
        //     itemsPerPage: 2
        // },
    };

    // 뷰어 업데이트 함수
    function updateViewer(viewerId) {
        const viewer = $(`#image-viewer-${viewerId.slice(-1)}`);
        const textContainer = $(`#text-${viewerId.slice(-1)}`);
        const currentPageElement = $(`#current-page-${viewerId.slice(-1)}`);
        const prevButton = $(`#prev-button-${viewerId.slice(-1)}`);
        const nextButton = $(`#next-button-${viewerId.slice(-1)}`);
        const { images, itemsPerPage, currentPage } = viewerData[viewerId];
        const start = currentPage * itemsPerPage;
        const currentImages = images.slice(start, start + itemsPerPage);

        // 이미지 렌더링
        viewer.html(currentImages.map(data => `<img src="${data.img}" alt="Image">`).join(''));

        // 텍스트 활성화
        textContainer.find('p').removeClass('active');
        currentImages.forEach(data => {
            const textElement = $(`#${data.textId}`);
            if (textElement.length) {
                textElement.addClass('active');
            }
        });

        // 현재 페이지 표시
        currentPageElement.text(`${currentPage + 1}`);

        // 버튼 활성/비활성화
        prevButton.prop('disabled', currentPage === 0);
        nextButton.prop('disabled', (currentPage + 1) * itemsPerPage >= images.length);
    }

    // 버튼 이벤트 등록
    Object.keys(viewerData).forEach((viewerId, index) => {
        const prevButton = $(`#prev-button-${index + 1}`);
        const nextButton = $(`#next-button-${index + 1}`);
        const viewer = viewerData[viewerId];

        // 이전 버튼
        prevButton.on('click', () => {
            if (viewer.currentPage > 0) {
                viewer.currentPage--;
                updateViewer(viewerId);
            }
        });

        // 다음 버튼
        nextButton.on('click', () => {
            if ((viewer.currentPage + 1) * viewer.itemsPerPage < viewer.images.length) {
                viewer.currentPage++;
                updateViewer(viewerId);
            }
        });

        // 초기화
        updateViewer(viewerId);
    });
});
