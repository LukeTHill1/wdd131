const emblems = [
    {
        name: "Marth",
        line: "Main line",
        imageSrc: "images/emblems/Marth_200Thumb.jpg",
        imageAlt: "Marth",  
        description: "The Ring of the Hero-King enables to wearer to wield Marth's power in combat. When the twelve Emblem Rings were divided amongst the nations of Elyos, the Ring of the Hero-King was one of the six that was retained by Lythos. While her child slept, Lumera placed the ring on Alears hand, allowing them to bond with the Ring as Marth patiently watched them over the millennium. After a thousand years, Alear suddenly awakens and is brought to Lythos Castle shortly afterwards. To help Alear fully acclimate, Lumera has a sparring session with them and encourages Alear to see if they can awaken the power of the Ring of the Hero-King. Alear suddenly hears an incantation in their mind and recites it, causing the Ring to awaken. Alear would take the Ring of the Hero-King on their journey.",
        baseLine: [
            "<tr>",
                "<th>Lv.</th>",
                "<th>Bond Effects</th>",
                "<th>Type</th>",
                "<th>Description</th>",
            "</tr>"
        ],
        table: [
                    "<tr>",
                      "<td>1</td>",
                      "<td><b>Perceptive</b></td>",
                      "<td>Skill(Inheritable)</td>",
                      "<td>If the unit initiates combat, grants Avo+15 during combat. Avo increases with high Spd. SP Cost: 250</td>",
                    "</tr>",
                    "<tr>",
                      "<td>1</td>",
                      "<td><b>Avoid +10</b></td>",
                      "<td>Skill(Inheritable)</td>",
                      "<td>Grants Avo+10. SP Cost: 500</td>",
                    "</tr>",
                    "<tr>",
                      "<td>1</td>",
                      "<td><b>Divine Speed</b></td>",
                      "<td>Skill(Engage Skill)</td>",
                      "<td>Unit performs an extra attack at 50% damage in combat.",
                        "<table>",
                            "<tr>",
                                "<td><b>[Dragon]</b> Unit recovers HP equal to damage dealt by extra attack.</td>",
                            "</tr>",
                            "<tr>",
                                "<td><b>[Covert]</b> If extra attack hits, poisons foe.</td>",
                            "</tr>",
                        "</table>",
                      "</td>",
                    "</tr>",
                    "<tr>",
                        "<td>1</td>",
                        "<td><b>Lodestar Rush</b></td>",
                        "<td>Skill(Engage Attack)</td>",
                        "<td>Use to launch 7 consecutive sword attacks at 30% damage. Adjacent foe only.",
                            "<table>",
                                "<tr>",
                                    "<td><b>[Dragon]</b> +2 attacks.</td>",
                                "</tr>",
                                "<tr>",
                                    "<td><b>[Backup]</b> +1 attack.</td>",
                                "</tr>",
                                "<tr>",
                                    "<td><b>[Mystical]</b> Damage based on their Magic stat.</td>",
                                "</tr>",
                            "</table>",
                        "</td>",
                    "</tr>",
                    "<tr>",
                        "<td>1</td>",
                        "<td><b>Rapier</b></td>",
                        "<td>Weapon(Exclusive)</td>",
                        "<td>Sword wielded by Emblem Marth. Effective: Cavalry, Armored.</td>",
                    "</tr>",
                    "<tr>",
                        "<td>2</td>",
                        "<td><b>Sword Agility 1</b></td>",
                        "<td>Skill(Inheritable)</td>",
                        "<td>Grants Avo+10 at a cost of Crit-10 when using a sword. SP Cost: 500</td>",
                    "</tr>",
                    "<tr>",
                        "<td>3</td>",
                        "<td><b>Break Defenses</b></td>",
                        "<td>Skill(Inheritable)</td>",
                        "<td>If unit's attack breaks foe, unit makes an extra attack at 50% damage. SP Cost: 2000</td>",
                    "</tr>",
                    "<tr>",
                        "<td>4</td>",
                        "<td><b>Avoid +15</b></td>",
                        "<td>Skill(Inheritable)</td>",
                        "<td>Grants Avo+15. SP Cost: 1500</td>",
                    "</tr>",
                    "<tr>",
                        "<td>5</td>",
                        "<td>Skill Inheritance</td>",
                        "<td>Bond Bonus</td>",
                        "<td>Unit can inherit this Emblem's Skills</td>",
                    "</tr>",
                    "<tr>",
                        "<td>6</td>",
                        "<td><b>Sword Agility 2</b></td>",
                        "<td>Skill(Inheritable)</td>",
                        "<td>Grants Avo+15 at a cost of Crit-10 when using a sword. SP Cost: 1000</td>",
                    "</tr>",
                    "<tr>",
                        "<td>7</td>",
                        "<td><b>Unyielding</b></td>",
                        "<td>Skill(Inheritable)</td>",
                        "<td>At start of player phase, if HP is 20% or less, restores 20% of unit's max HP. SP Cost: 100</td>",
                    "</tr>",
                    "<tr>",
                        "<td>8</td>",
                        "<td><b>Sword Agility 3</b></td>",
                        "<td>Skill(Inheritable)</td>",
                        "<td>Grants Avo+20 at a cost of Crit-10 when using a sword.</td>",
                    "</tr>",
                    "<tr>",
                        "<td>8</td>",
                       " <td><b>Sword Prof.</b></td>",
                        "<td>Proficiency(Sword)</td>",
                        "<td>Proficiency with swords. Required for promotion to certain classes.</td>",
                    "</tr>",
                    "<tr>",
                        "<td>9</td>",
                        "<td><b>Avoid +20</b></td>",
                        "<td>Skill(Inheritable)</td>",
                        "<td>Grants Avo+20. <b>SP Cost</b>: 2500</td>",
                    "</tr>",
                    "<tr>",
                        "<td>10</td>",
                        "<td><b>Mercurius</b></td>",
                        "<td>Weapon(Exclusive)</td>",
                        "<td>Sword wielded by Emblem Marth. Doubles user's earned experience.</td>",
                    "</tr>",
                    "<tr>",
                        "<td>11</td>",
                        "<td><b>Strong Bond</b></td>",
                        "<td>Bond Bonus</td>",
                        "<td>Unit stays engaged 1 additional turn.</td>",
                    "</tr>",
                    "<tr>",
                        "<td>12</td>",
                        "<td><b>Unyielding+</b></td>",
                        "<td>Skill(Inheritable)</td>",
                        "<td>At start of player phase, if HP is 30% or less, restores 30% of unit's max HP. <b>SP Cost</b>: 200</td>",
                    "</tr>",
                    "<tr>",
                        "<td>13</td>",
                        "<td><b>Sword Agility 4</b></td>",
                        "<td>Skill(Inheritable)</td>",
                        "<td>Grants Avo+25 at a cost of Crit-10 when using a sword. <b>SP Cost</b>: 3000</td>",
                    "</tr>",
                    "<tr>",
                        "<td>14</td>",
                        "<td><b>Avoid +25</b></td>",
                        "<td>Skill(Inheritable)</td>",
                        "<td>Grants Avo+25. <b>SP Cost</b>: 3500</td>",
                    "</tr>",
                    "<tr>",
                        "<td>15</td>",
                        "<td><b>Falchion</b></td>",
                        "<td>Weapon(Exclusive)</td>",
                        "<td>Sacred sword wielded by Emblem Marth. Effective: Dragon.</td>",
                    "</tr>",
                    "<tr>",
                        "<td>16</td>",
                        "<td><b>Perceptive+</b></td>",
                        "<td>Skill(Inheritable)</td>",
                        "<td>If the unit initiates combat, grants Avo+30 during combat. Avo increases with high Spd. <b>SP Cost</b>: 500</td>",
                    "</tr>",
                    "<tr>",
                        "<td>17</td>",
                        "<td><b>Sword Agility 5</b></td>",
                        "<td>Skill(Inheritable)</td>",
                        "<td>Grants Avo+30 at a cost of Crit-10 when using a sword. <b>SP Cost</b>: 4000</td>",
                    "</tr>",
                    "<tr>",
                        "<td>18</td>",
                        "<td><b>Unyielding++</b></td>",
                        "<td>Skill(Inheritable)</td>",
                        "<td>At start of player phase, if HP is 40% or less, restores 40% of unit's max HP. <b>SP Cost</b>: 300</td>",
                    "</tr>",
                    "<tr>",
                        "<td>19</td>",
                        "<td><b>Avoid +30</b></td>",
                        "<td>Skill(Inheritable)</td>",
                        "<td>Grants Avo+30. <b>SP Cost</b>: 4500</td>",
                    "</tr>",
                    "<tr>",
                        "<td>20</td>",
                        "<td><b>Deep Synergy</b></td>",
                        "<td>Bond Bonus</td>",
                        "<td>Unit's engage meter is shortened one step</td>",
                    "</tr>",                    
        ],
    },
    {
        name: "Sigurd",
        line: "Main line",
        imageSrc: "images/emblems/Sigurd_200Thumb.jpg",
        imageAlt: "Sigurd",
        description: "The Ring of the Holy Knight enables to wearer to wield Sigurd's power in combat. When the Emblem Rings were distributed throughout Elyos, the Ring of the Holy Knight was among the six retained by Lythos. When Alear awoke 1000 years after the rings were distributed, Queen Lumera brought Alear to Lythos Castle and decided to train them in combat in hopes of reawakening their memories. Using the Ring of the Holy Knight for their sparring match, she was ultimately unsuccessful in helping them remember their lost memories.",
        baseLine: [
            "<tr>",
                "<th>Lv.</th>",
                "<th>Bond Effects</th>",
                "<th>Type</th>",
                "<th>Description</th>",
            "</tr>"
        ],
        table: [

        ]
    },
    {
        name: "Celica",
        line: "Main line",
        imageSrc: "images/emblems/Celica_200Thumb.jpg",
        imageAlt: "Celica",
        description: "In Elyos, Emblem Celica is one of the twelve Emblems that protect the continent. In the aftermath of the war against the Fell Dragon Sombron, Celica's ring, the Ring of the Caring Princess, was entrusted to the kingdom of Firene. In Chapter 4, Elusia begins its invasion of Firene to steal Firene's Emblem Ring. Queen Ève entrusts the Ring of the Caring Princess to her daughter, Princess Céline, to deliver to the Divine Dragon Alear who had arrived in Firene with Prince Alfred. Céline meets with Alear and Alfred's forces in Florra Mill Town and hands the Ring of the Caring Princess to Alear, allowing them to evoke the ring, restoring Celica's powers. Alear gives the Ring back to Céline to use in the immediate battle against the Elusian forces that were tailing her.",
        baseLine: [
            "<tr>",
                "<th>Lv.</th>",
                "<th>Bond Effects</th>",
                "<th>Type</th>",
                "<th>Description</th>",
            "</tr>"
        ],
        table: [

        ]
    },
    {
        name: "Micaiah",
        line: "Main line",
        imageSrc: "images/emblems/Micaiah_200Thumb.jpg",
        imageAlt: "Micahiah",
        description: "The Ring of the Dawn Maiden houses the spirit of Micaiah from Fire Emblem: Radiant Dawn. When the Emblem Rings were distributed, each kingdom received one of the rings. However, Firene actually held two rings. It was widely known that they held the Ring of the Caring Princess, however the Ring of the Dawn Maiden was also entrusted to them. They hid the ring in a shrine near their border with Brodia.",
        baseLine: [
            "<tr>",
                "<th>Lv.</th>",
                "<th>Bond Effects</th>",
                "<th>Type</th>",
                "<th>Description</th>",
            "</tr>"
        ],
        table: [

        ]
    },
    {
        name: "Leif",
        line: "Main line",
        imageSrc: "images/emblems/Leif_200Thumb.jpg",
        imageAlt: "Leif",
        description: "The Ring of the Sage Lord houses the Emblem spirit of Leif from Fire Emblem: Thracia 776. It was one of the six rings still held by Lythos when the rings were distributed throughout Elyos. When Elusia raided the Ring Vault of Lythos, it was one of the rings that was stolen. Princess Ivy was tasked with sieging Brodia Castle by King Hyacinth. To aid her, he gave her the Ring of the Sage Lord which had been corrupted by Sombron. After a grueling battle, Ivy is defeated allowing Alear to recover the Ring and purify it.",
        baseLine: [
            "<tr>",
                "<th>Lv.</th>",
                "<th>Bond Effects</th>",
                "<th>Type</th>",
                "<th>Description</th>",
            "</tr>"
        ],
        table: [

        ]
    },
    {
        name: "Roy",
        line: "Main line",
        imageSrc: "images/emblems/Roy_200Thumb.jpg",
        imageAlt: "Roy",
        description: "The Ring of the Young Lion was safeguarded by the Kingdom of Brodia. Upon the arrival of Alear to Brodia, King Morion personally brought the ring immediately to them. The Ring of the Young Lion enables the wearer to wield Roy's power in combat.",
        baseLine: [
            "<tr>",
                "<th>Lv.</th>",
                "<th>Bond Effects</th>",
                "<th>Type</th>",
                "<th>Description</th>",
            "</tr>"
        ],
        table: [

        ]
    },
    {
        name: "Lyn",
        line: "Main line",
        imageSrc: "images/emblems/Lyn_200Thumb.jpg",
        imageAlt: "Lyn",
        description: "The Ring of the Lady of the Plains enables the wearer to wield Lyn's power in combat. When the 12 Emblem Rings were distributed to the kingdoms of Elyos, Elusia was given the Ring of the Lady of the Plains to safeguard. Having allied themselves with the Fell Dragon Sombron, King Hyacinth gave the ring to Sombron so the ring could be corrupted. Hyacinth sent a challenge to King Morion of Brodia to face him in combat. Blinded by his sense of honor, Morion accepted his challenge and faced him just outside the Fort on the Border between Brodia and Elusia. The two dueled with Morion quickly gaining the upper hand, forcing Hyacinth to utilize the corrupted Ring of the Lady of the Plains, subduing Morion enough to take him to Elusia so he could use Morion's sovereign blood to revive Sombron. Upon Sombron's revival and the subsequent theft of the Emblem Rings in Alear's possession, Princess Ivy stole the Ring of the Lady of the Plains and delivered it alongside the Ring of the Princess Exalt in the Shadowy Moor as they escaped Elusia into Solm. Alear was able to then purify the Rings and escape successfully.",
        baseLine: [
            "<tr>",
                "<th>Lv.</th>",
                "<th>Bond Effects</th>",
                "<th>Type</th>",
                "<th>Description</th>",
            "</tr>"
        ],
        table: [

        ]
    },
    {
        name: "Lucina",
        line: "Main line",
        imageSrc: "images/emblems/Lucina_200Thumb.jpg",
        imageAlt: "Lucina",
        description: "The Ring of the Princess Exalt enables to wearer to wield Lucina's power in combat. During the raid of Lythos by Gradlon, the Ring of the Princess Exalt was stolen. Sombron was able to awaken the ring and corrupted it, bequeating it to the kingdom of Elusia. During Chapter 7, Princess Hortensia wielded the ring against Alear and their forces. At some point between Chapter 9 and Chapter 11, Ivy managed to acquire the ring, alongside Ring of the Lady of the Plains, and delivered them to Alear at the Shadowy Moor whom successfully purified them.",
        baseLine: [
            "<tr>",
                "<th>Lv.</th>",
                "<th>Bond Effects</th>",
                "<th>Type</th>",
                "<th>Description</th>",
            "</tr>"
        ],
        table: [

        ]
    },
    {
        name: "Ike",
        line: "Main line",
        imageSrc: "images/emblems/Ike_200Thumb.jpg",
        imageAlt: "Ike",
        description: "The Ring of the Radiant Hero was given to the Kingdom of Solm when the twelve Emblem Rings were distributed across Elyos. The Ring of the Radiant Hero was known to be safeguarded by the Solm Royal Family itself with Princess Timerra possessing it. The Ring of the Radiant Hero enables the wearer to wield Ike's power in combat.",
        baseLine: [
            "<tr>",
                "<th>Lv.</th>",
                "<th>Bond Effects</th>",
                "<th>Type</th>",
                "<th>Description</th>",
            "</tr>"
        ],
        table: [

        ]
    },
    {
        name: "Byleth",
        line: "Main line",
        imageSrc: "images/emblems/Byleth_200Thumb.jpg",
        imageAlt: "Byleth",
        description: "The Ring of the Instructor is one of the six Emblem Rings originally retained by Lythos when they were were distributed amongst the nations of Elyos following the defeat of Sombron. When Elusia invades Lythos Castle, the Ring of the Instructor is one of the rings stolen from the Ring Vault. Later, when Alear and their forces invade Elusia to rescue King Morion, King Hyacinth gives Princess Hortensia the Ring of the Instructor to fend off the Divine Dragon's forces, though she is ultimately defeated. After Sombron awakens and Ivy betrays the Fell Dragon, Zephia uses Sombron's corruption of the Ring of the Instructor to control Ivy's sister Hortensia, using her as a pawn to invade the Solm royal palace and acquire the Emblem Ring held by the Solmic royal family. After Alear's forces defeat the controlled Hortensia in grueling battle, the princess is freed of the Fell Dragon's influence, and Alear acquires and purifies the Emblem Ring. The Ring of the Instructor is engraved with a pattern evoking Nabatean design, and features coloration based on Byleth's default clothing colors.",
        baseLine: [
            "<tr>",
                "<th>Lv.</th>",
                "<th>Bond Effects</th>",
                "<th>Type</th>",
                "<th>Description</th>",
            "</tr>"
        ],
        table: [

        ]
    },
    {
        name: "Corrin",
        line: "Main line",
        imageSrc: "images/emblems/Corrin_200Thumb.jpg",
        imageAlt: "Corrin",
        description: "The Ring of the Crux of Fate enables the wearer to wield Corrin's power in combat. A thousand years prior to the events of Engage, the Ring of the Crux of Fate was one of the rings distributed across Elyos. It was secretly entrusted to Solm with the general public only knowing that they held the Ring of the Radiant Hero. To keep the Ring of the Crux of Fate safe, the Solm royal family hid it in the Northern Fortress where locals urged people to steer clear of due to rumors of haunted spirits infesting it. Using the rumor, very few dared to venture into the ruins. The Ring of the Crux of Fate bears designs similar to Corrin's armor and the inlet gemstone resembles the design of Corrin's Dragonstone.",
        baseLine: [
            "<tr>",
                "<th>Lv.</th>",
                "<th>Bond Effects</th>",
                "<th>Type</th>",
                "<th>Description</th>",
            "</tr>"
        ],
        table: [

        ]
    },
    {
        name: "Eirika/Ephraim",
        line: "Main line",
        imageSrc: "images/emblems/Erika_200Thumb.jpg",
        imageAlt: "Eirika and Ephraim",
        description: "The Ring of the Azure Twins is one of the six rings in possession of Lythos when the others were distributed throughout the realms. When Elusia invaded Lythos, the Ring of the Azure Twins was one of the four rings stolen during the raid on Lythos Castle. Later, in Chapter 17, Rosado and Goldmary posed as obedient Elusia soldiers in order to steal the Ring of the Azure Twins. They are successful and manage to flee the army in search of Princess Hortensia, eventually reuniting with her at the Azure Coast where she had joined Alear's army. Rosado gives the ring to Alear to awaken Eirika in which Alear gives to Rosado to immediately use in the following battle. The Ring of the Azure Twins enables the wearer to wield Eirika's and Ephraim's power in combat, though conversationally, Eirika is the one who talks to the characters of the game during Bond Supports.",
        baseLine: [
            "<tr>",
                "<th>Lv.</th>",
                "<th>Bond Effects</th>",
                "<th>Type</th>",
                "<th>Description</th>",
            "</tr>"
        ],
        table: [

        ]
    },
    {
        name: "Edelgard/Dimitri/Claide",
        line: "DLC",
        imageSrc: "images/emblems/leaders-profile.jpg",
        imageAlt: "Edelgard, Dimitri, and Claude",
        description: "The Bracelet of the Three Houses is a Bracelet housing the spirits of Edelgard, Dimitri, and Claude. It was discovered by Alear on the Lookout Ridge of the Somniel.",
        baseLine: [
            "<tr>",
                "<th>Lv.</th>",
                "<th>Bond Effects</th>",
                "<th>Type</th>",
                "<th>Description</th>",
            "</tr>"
        ],
        table: [

        ]
    },
    {
        name: "Tiki",
        line: "DLC",
        imageSrc: "images/emblems/EmblemHeadshots_Tiki_DLC_enGB.jpg",
        imageAlt: "Tiki",
        description: "The Bracelet of the Ancestor houses the spirit of Tiki from her Archanea Series appearances as a young girl.",
        baseLine: [
            "<tr>",
                "<th>Lv.</th>",
                "<th>Bond Effects</th>",
                "<th>Type</th>",
                "<th>Description</th>",
            "</tr>"
        ],
        table: [

        ]
    },
    {
        name: "Hector",
        line: "DLC",
        imageSrc: "images/emblems/EHeadshots_Hector_enGB.jpg",
        imageAlt: "Hector",
        description: "The Bracelet of the Brash General houses the spirit of Hector from Fire Emblem: The Blazing Blade.",
        baseLine: [
            "<tr>",
                "<th>Lv.</th>",
                "<th>Bond Effects</th>",
                "<th>Type</th>",
                "<th>Description</th>",
            "</tr>"
        ],
        table: [

        ]
    },
    {
        name: "Soren",
        line: "DLC",
        imageSrc: "images/emblems/EHeadshots_Soren_enGB.jpg",
        imageAlt: "Soren",
        description: "The Bracelet of the Strategist houses the spirit of Soren from Fire Emblem: Path of Radiance and Fire Emblem: Radiant Dawn. According to Soren, his Bracelet was safeguarded by Elusia in an alternative Elyos.",
        baseLine: [
            "<tr>",
                "<th>Lv.</th>",
                "<th>Bond Effects</th>",
                "<th>Type</th>",
                "<th>Description</th>",
            "</tr>"
        ],
        table: [

        ]
    },
    {
        name: "Camilla",
        line: "DLC",
        imageSrc: "images/emblems/EHeadshots_Camille_enGB (1).jpg",
        imageAlt: "Camilla",
        description: "The Bracelet of the Doting Sister houses the spirit of Camilla from Fire Emblem Fates. According to Camilla, her Bracelet was safeguarded by Solm from an alternative version of Elyos.",
        baseLine: [
            "<tr>",
                "<th>Lv.</th>",
                "<th>Bond Effects</th>",
                "<th>Type</th>",
                "<th>Description</th>",
            "</tr>"
        ],
        table: [

        ]
    },
    {
        name: "Chrom & Robin",
        line: "DLC",
        imageSrc: "images/emblems/chrombin-profile.jpg",
        imageAlt: "Chrom & Robin",
        description: "",
        baseLine: [
            "<tr>",
                "<th>Lv.</th>",
                "<th>Bond Effects</th>",
                "<th>Type</th>",
                "<th>Description</th>",
            "</tr>"
        ],
        table: [

        ]
    },
    {
        name: "Veronica",
        line: "DLC",
        imageSrc: "images/emblems/EHeadshots_Veronica_enGB.jpg",
        imageAlt: "Veronica",
        description: "",
        baseLine: [
            "<tr>",
                "<th>Lv.</th>",
                "<th>Bond Effects</th>",
                "<th>Type</th>",
                "<th>Description</th>",
            "</tr>"
        ],
        table: [

        ]
    }
]

export default emblems;  // Export the emblems array as the default export