document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("div.general");
    const menuItems = document.querySelectorAll("header nav ul li");
    const repCards = document.querySelectorAll(".team .rep");
    const secondariSections = document.querySelectorAll("#secondari section");
    const artefacDiv = document.getElementById("artefac");
    const armaDiv = document.getElementById("arma");
    const closeButton = document.querySelectorAll(".close");
    const imgElements = document.querySelectorAll(".img img");

    const artefacTable = artefacDiv.querySelector("table");
    const firstThImg = artefacTable.querySelector("th img");
    const secondTh = artefacTable.querySelector("th:nth-child(2)");
    const secondRowSecondCell = artefacTable.querySelector("tr:nth-child(2) td:nth-child(2)");
    const thirdRowSecondCell = artefacTable.querySelector("tr:nth-child(3) td:nth-child(2)");

    const armaTable = armaDiv.querySelector("table");
    const row1Img = armaTable.querySelector("tr:nth-child(1) th:nth-child(1) img");
    const row1Text = armaTable.querySelector("tr:nth-child(1) th:nth-child(2)");
    const row2Base = armaTable.querySelector("tr:nth-child(2) th:nth-child(1)");
    const row2Alt = armaTable.querySelector("tr:nth-child(2) th:nth-child(2)");
    const row3Text = armaTable.querySelector("tr:nth-child(3) td");

    sections.forEach((section, index) => {
        if (index === 0) {
            section.style.display = "flex";
        } else {
            section.style.display = "none";
        }
    });

    menuItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            sections.forEach((section, secIndex) => {
                if (secIndex === index) {
                    section.style.display = secIndex === 0 ? "flex" : "block";
                } else {
                    section.style.display = "none";
                }
            });
        });
    });

    const scrollToElement = (element) => {
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    if (repCards.length >= 2 && secondariSections.length >= 2) {
        repCards[0].addEventListener("click", () => scrollToElement(secondariSections[0]));
        repCards[1].addEventListener("click", () => scrollToElement(secondariSections[1]));
    }

    imgElements.forEach((img) => {
        img.addEventListener("click", () => {
            const imgSrc = img.src;

            if (imgSrc.includes("Thunder")) {
                artefacDiv.classList.remove("amagat");
                artefacDiv.classList.add("display");

                firstThImg.src = imgSrc;
                secondTh.textContent = "Thundering Fury";
                secondRowSecondCell.textContent = "Electro DMG Bonus +15%";
                thirdRowSecondCell.textContent = "Increases DMG caused by Overloaded, Electro-Charged, Superconduct, and Hyperbloom by 40%, and the DMG Bonus conferred by Aggravate is increased by 20%. When Quicken or the aforementioned Elemental Reactions are triggered, Elemental Skill CD is decreased by 1s. Can only occur once every 0.8s.";
            }

            if (imgSrc.includes("Steel")) {
                artefacDiv.classList.remove("amagat");
                artefacDiv.classList.add("display");

                firstThImg.src = imgSrc; 
                secondTh.textContent = "Gilded Dreams";
                secondRowSecondCell.textContent = "Increases Elemental Mastery by 80.";
                thirdRowSecondCell.textContent = "Within 8s of triggering an Elemental Reaction, the character equipping this will obtain buffs based on the Elemental Type of the other party members. ATK is increased by 14% for each party member whose Elemental Type is the same as the equipping character, and Elemental Mastery is increased by 50 for every party member with a different Elemental Type. Each of the aforementioned buffs will count up to 3 characters. This effect can be triggered once every 8s. The character who equips this can still trigger its effects when not on the field.";
            }

            if (imgSrc.includes("Gladiator")) {
                artefacDiv.classList.remove("amagat");
                artefacDiv.classList.add("display");

                firstThImg.src = imgSrc; 
                secondTh.textContent = "Gladiator's Finale";
                secondRowSecondCell.textContent = "ATK +18%.";
                thirdRowSecondCell.textContent = "If the wielder of this artifact set uses a Sword, Claymore or Polearm, increases their Normal Attack DMG by 35%.";
            }

            if (imgSrc.includes("Virides")) {
                artefacDiv.classList.remove("amagat");
                artefacDiv.classList.add("display");

                firstThImg.src = imgSrc; 
                secondTh.textContent = "Viridescent Venerer";
                secondRowSecondCell.textContent = "Anemo DMG Bonus +15%";
                thirdRowSecondCell.textContent = "Increases Swirl DMG by 60%. Decreases opponent's Elemental RES to the element infused in the Swirl by 40% for 10s.";
            }

            if (imgSrc.includes("Beast")) {
                artefacDiv.classList.remove("amagat");
                artefacDiv.classList.add("display");

                firstThImg.src = imgSrc; 
                secondTh.textContent = "Scroll of the Hero of Cinder City";
                secondRowSecondCell.textContent = "When a nearby party member triggers a Nightsoul Burst, the equipping character regenerates 6 Elemental Energy.";
                thirdRowSecondCell.textContent = "After the equipping character triggers a reaction related to their Elemental Type, all nearby party members gain a 12% Elemental DMG Bonus for the Elemental Types involved in the elemental reaction for 15s. If the equipping character is in the Nightsoul's Blessing state when triggering this effect, all nearby party members gain an additional 28% Elemental DMG Bonus for the Elemental Types involved in the elemental reaction for 20s. The equipping character can trigger this effect while off-field, and the DMG bonus from Artifact Sets with the same name do not stack.";
            }

            if (imgSrc.includes("Forgotten")) {
                artefacDiv.classList.remove("amagat");
                artefacDiv.classList.add("display");

                firstThImg.src = imgSrc; 
                secondTh.textContent = "Song of Days Past";
                secondRowSecondCell.textContent = "Healing Bonus +15%";
                thirdRowSecondCell.textContent = "When the equipping character heals a party member, the Yearning effect will be created for 6s, which records the total amount of healing provided (including overflow healing). When the duration expires, the Yearning effect will be transformed into the 'Waves of Days Past' effect: When your active party member hits an opponent with a Normal Attack, Charged Attack, Plunging Attack, Elemental Skill, or Elemental Burst, the DMG dealt will be increased by 8% of the total healing amount recorded by the Yearning effect. The 'Waves of Days Past' effect is removed after it has taken effect 5 times or after 10s. A single instance of the Yearning effect can record up to 15,000 healing, and only a single instance can exist at once, but it can record the healing from multiple equipping characters. Equipping characters on standby can still trigger this effect.";
            }

            if (imgSrc.includes("Royal")) {
                artefacDiv.classList.remove("amagat");
                artefacDiv.classList.add("display");

                firstThImg.src = imgSrc; 
                secondTh.textContent = "Noblesse Oblige";
                secondRowSecondCell.textContent = "Elemental Burst DMG +20%";
                thirdRowSecondCell.textContent = "Using an Elemental Burst increases all party members' ATK by 20% for 12s. This effect cannot stack.";
            }

            if (imgSrc.includes("Instruc")) {
                artefacDiv.classList.remove("amagat");
                artefacDiv.classList.add("display");

                firstThImg.src = imgSrc; 
                secondTh.textContent = "Instructor";
                secondRowSecondCell.textContent = "Increases Elemental Mastery by 80.";
                thirdRowSecondCell.textContent = "Upon triggering an Elemental Reaction, increases all party members' Elemental Mastery by 120 for 8s.";
            }

            if (imgSrc.includes("Mist")) {
                armaDiv.classList.remove("amagat");
                armaDiv.classList.add("display");

                row1Img.src = imgSrc;
                row1Text.textContent = "Mistsplitter Reforged";
                row2Base.textContent = "674";
                row2Alt.textContent = "CRIT DMG 44.1%";
                row3Text.textContent = "Gain a 12~24% Elemental DMG Bonus for all elements and receive the might of the Mistsplitter's Emblem. At stack levels 1/2/3, Mistsplitter's Emblem provides a 8/16/28~16/32/56% Elemental DMG Bonus for the character's Elemental Type. The character will obtain 1 stack of Mistsplitter's Emblem in each of the following scenarios: Normal Attack deals Elemental DMG (stack lasts 5s), casting Elemental Burst (stack lasts 10s); Energy is less than 100% (stack disappears when Energy is full). Each stack's duration is calculated independently.";
            }

            if (imgSrc.includes("Jade")) {
                armaDiv.classList.remove("amagat");
                armaDiv.classList.add("display");

                row1Img.src = imgSrc;
                row1Text.textContent = "Primordial Jade Cutter";
                row2Base.textContent = "542";
                row2Alt.textContent = "Crit Rate 44.1%";
                row3Text.textContent = "HP increased by 20~40%. Additionally, provides an ATK Bonus based on 1.2~2.4% of the wielder's Max HP.";
            }
    
            if (imgSrc.includes("Black")) {
                armaDiv.classList.remove("amagat");
                armaDiv.classList.add("display");

                row1Img.src = imgSrc;
                row1Text.textContent = "The Black Sword";
                row2Base.textContent = "510";
                row2Alt.textContent = "CRIT Rate 27.6%";
                row3Text.textContent = "Increases DMG dealt by Normal and Charged Attacks by 20~40%. Additionally, regenerates 60~100% of ATK as HP when Normal and Charged Attacks score a CRIT Hit. This effect can occur once every 5s.";
            }

            if (imgSrc.includes("Lion")) {
                armaDiv.classList.remove("amagat");
                armaDiv.classList.add("display");

                row1Img.src = imgSrc;
                row1Text.textContent = "Lion's Roar";
                row2Base.textContent = "510";
                row2Alt.textContent = "ATK 41.3%";
                row3Text.textContent = "Increases DMG against enemies affected by Pyro or Electro by 20~36%.";
            }

            if (imgSrc.includes("Freedom")) {
                armaDiv.classList.remove("amagat");
                armaDiv.classList.add("display");

                row1Img.src = imgSrc;
                row1Text.textContent = "Freedom-Sworn";
                row2Base.textContent = "608";
                row2Alt.textContent = "Elemental Mastery 198";
                row3Text.textContent = "A part of the 'Millennial Movement' that wanders amidst the winds.Increases DMG by 10~20%.When the character wielding this weapon triggers Elemental Reactions, they gain a Sigil of Rebellion. This effect can be triggered once every 0.5s and can be triggered even if said character is not on the field.When you possess 2 Sigils of Rebellion, all of them will be consumed and all nearby party members will obtain 'Millennial Movement: Song of Resistance' for 12s.'Millennial Movement: Song of Resistance' increases Normal, Charged, and Plunging Attack DMG by 16~32% and increases ATK by 20~40%. Once this effect is triggered, you will not gain Sigils of Rebellion for 20s.Of the many effects of the 'Millennial Movement,' buffs of the same type will not stack.";
            }

            if (imgSrc.includes("Xiphos")) {
                armaDiv.classList.remove("amagat");
                armaDiv.classList.add("display");

                row1Img.src = imgSrc;
                row1Text.textContent = "Xiphos' Moonlight";
                row2Base.textContent = "510";
                row2Alt.textContent = "Elemtal Mastery 165";
                row3Text.textContent = "The following effect will trigger every 10s: The equipping character will gain 0.036~0.072% Energy Recharge for each point of Elemental Mastery they possess for 12s, with nearby party members gaining 30% of this buff for the same duration. Multiple instances of this weapon can allow this buff to stack. This effect will still trigger even if the character is not on the field.";
            }

            if (imgSrc.includes("Iron")) {
                armaDiv.classList.remove("amagat");
                armaDiv.classList.add("display");

                row1Img.src = imgSrc;
                row1Text.textContent = "Iron Sting";
                row2Base.textContent = "510";
                row2Alt.textContent = "Elemental Mastery 165";
                row3Text.textContent = "Dealing Elemental DMG increases all DMG by 6~12% for 6s. Max 2 stacks. Can only occur once every 1s.";
            }

            if (imgSrc.includes("Peak")) {
                armaDiv.classList.remove("amagat");
                armaDiv.classList.add("display");

                row1Img.src = imgSrc;
                row1Text.textContent = "Peak Patrol Song";
                row2Base.textContent = "542";
                row2Alt.textContent = "DEF 82.7%";
                row3Text.textContent = "Gain 'Ode to Flowers' after Normal or Plunging Attacks hit an opponent: DEF increases by 8~16% and gain a 10~20% All Elemental DMG Bonus for 6s. Max 2 stacks. Can trigger once per 0.1s. When this effect reaches 2 stacks or the 2nd stack's duration is refreshed, increase all nearby party members' All Elemental DMG Bonus by 8~16% for every 1,000 DEF the equipping character has, up to a maximum of 25.6~51.2%, for 15s.";
            }

            if (imgSrc.includes("Flute")) {
                armaDiv.classList.remove("amagat");
                armaDiv.classList.add("display");

                row1Img.src = imgSrc;
                row1Text.textContent = "Flute of Ezpizal";
                row2Base.textContent = "510";
                row2Alt.textContent = "DEF 69.0%";
                row3Text.textContent = "Using an Elemental Skill increases DEF by 16~32% for 15s.";
            }

            if (imgSrc.includes("Favonius_S")) {
                armaDiv.classList.remove("amagat");
                armaDiv.classList.add("display");

                row1Img.src = imgSrc;
                row1Text.textContent = "Favonius Sword";
                row2Base.textContent = "454";
                row2Alt.textContent = "Energy Recharge 61.3%";
                row3Text.textContent = "CRIT hits have a 60~100% chance to generate a small amount of Elemental Particles, which will regenerate 6 Energy for the character. Can only occur once every 12~6s.";
            }

            if (imgSrc.includes("Thousand")) {
                armaDiv.classList.remove("amagat");
                armaDiv.classList.add("display");

                row1Img.src = imgSrc;
                row1Text.textContent = "A Thousand Floating Dream";
                row2Base.textContent = "542";
                row2Alt.textContent = "Elemental Mastery 265";
                row3Text.textContent = "Party members other than the equipping character will provide the equipping character with buffs based on whether their Elemental Type is the same as the latter or not. If their Elemental Types are the same, increase Elemental Mastery by 32~64. If not, increase the equipping character's DMG Bonus from their Elemental Type by 10~26%. Each of the aforementioned effects can have up to 3 stacks. Additionally, all nearby party members other than the equipping character will have their Elemental Mastery increased by 40~48. Multiple such effects from multiple such weapons can stack.";
            }

            if (imgSrc.includes("Fragments")) {
                armaDiv.classList.remove("amagat");
                armaDiv.classList.add("display");

                row1Img.src = imgSrc;
                row1Text.textContent = "Sacrificial Fragments";
                row2Base.textContent = "454";
                row2Alt.textContent = "Elemtal Mastery 221";
                row3Text.textContent = "After dealing damage to an opponent with an Elemental Skill, the skill has a 40~80% chance to end its own CD. Can only occur once every 30~16s.";
            }

            if (imgSrc.includes("Amber")) {
                armaDiv.classList.remove("amagat");
                armaDiv.classList.add("display");

                row1Img.src = imgSrc;
                row1Text.textContent = "Prototype Amber";
                row2Base.textContent = "510";
                row2Alt.textContent = "HP 41.3";
                row3Text.textContent = "Using an Elemental Burst regenerates 4~6 Energy every 2s for 6s. All party members will regenerate 4~6% HP every 2s for this duration.";
            }

            if (imgSrc.includes("Sacrificial_S")) {
                armaDiv.classList.remove("amagat");
                armaDiv.classList.add("display");

                row1Img.src = imgSrc;
                row1Text.textContent = "Sacrificial Sword";
                row2Base.textContent = "454";
                row2Alt.textContent = "Energy Recharge 61.3%";
                row3Text.textContent = "After dealing damage to an opponent with an Elemental Skill, the skill has a 40~80% chance to end its own CD. Can only occur once every 30~16s.";
            }

            if (imgSrc.includes("Desert")) {
                armaDiv.classList.remove("amagat");
                armaDiv.classList.add("display");

                row1Img.src = imgSrc;
                row1Text.textContent = "Dialogues of the Desert Sages";
                row2Base.textContent = "510";
                row2Alt.textContent = "HP 41.3%";
                row3Text.textContent = "When the wielder performs healing, restore 8~16 Energy. This effect can be triggered once every 10s and can occur even when the character is not on the field.";
            }

            if (imgSrc.includes("Lance")) {
                armaDiv.classList.remove("amagat");
                armaDiv.classList.add("display");

                row1Img.src = imgSrc;
                row1Text.textContent = "Favonius Lance";
                row2Base.textContent = "565";
                row2Alt.textContent = "Energy Recharge 30.6%";
                row3Text.textContent = "CRIT Hits have a 60~100% chance to generate a small amount of Elemental Particles, which will regenerate 6 Energy for the character. Can only occur once every 12~6s.";
            }

            if (imgSrc.includes("Elegy")) {
                armaDiv.classList.remove("amagat");
                armaDiv.classList.add("display");
                
                row1Img.src = imgSrc;
                row1Text.textContent = "Elegy of the End";
                row2Base.textContent = "608";
                row2Alt.textContent = "Energy Recharge 55.1%";
                row3Text.textContent = "A part of the 'Millennial Movement' that wanders amidst the winds.Increases Elemental Mastery by 60~120.When the Elemental Skills or Elemental Bursts of the character wielding this weapon hit opponents, that character gains a Sigil of Remembrance. This effect can be triggered once every 0.2s and can be triggered even if said character is not on the field.When you possess 4 Sigils of Remembrance, all of them will be consumed and all nearby party members will obtain the 'Millennial Movement: Farewell Song' effect for 12s.'Millennial Movement: Farewell Song' increases Elemental Mastery by 100~200 and increases ATK by 20~40%. Once this effect is triggered, you will not gain Sigils of Remembrance for 20s.Of the many effects of the 'Millennial Movement,' buffs of the same type will not stack.";
            }

            if (imgSrc.includes("Bow")) {
                armaDiv.classList.remove("amagat");
                armaDiv.classList.add("display");

                row1Img.src = imgSrc;
                row1Text.textContent = "Sacrificial Bow";
                row2Base.textContent = "565";
                row2Alt.textContent = "Energy Recharge 30.6%";
                row3Text.textContent = "After dealing damage to an opponent with an Elemental Skill, the skill has a 40~80% chance to end its own CD. Can only occur once every 30~16s.";
            }

            if (imgSrc.includes("Warbow")) {
                armaDiv.classList.remove("amagat");
                armaDiv.classList.add("display");

                row1Img.src = imgSrc;
                row1Text.textContent = "Favonius Warbow";
                row2Base.textContent = "454";
                row2Alt.textContent = "Energy Recharge 61.3%";
                row3Text.textContent = "CRIT hits have a 60~100% chance to generate a small amount of Elemental Particles, which will regenerate 6 Energy for the character. Can only occur once every 12~6s.";
            }
        });
    });
    closeButton.forEach((close) => {
        close.addEventListener("click", () => {
            artefacDiv.classList.remove("display");
            artefacDiv.classList.add("amagat");
            armaDiv.classList.remove("display");
            armaDiv.classList.add("amagat");
        });
    })     
});
