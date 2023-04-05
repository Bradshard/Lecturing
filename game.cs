using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace RPG_Game
{
    public partial class Game : Form
    {
        // Player and enemy stats
        string playerName;
        string playerClass;
        int playerLevel;
        int playerHP;
        int playerMP;
        int playerMaxHP;
        int playerMaxMP;
        int playerAttack;
        int playerDefense;
        int playerEvasion;

        int enemyLevel;
        int enemyHP;
        int enemyMaxHP;
        int enemyAttack;
        int enemyDefense;
        int enemyEvasion;

        // Buffs and debuffs
        string playerBuff = ""; // Buff affecting player (e.g. "Shield", "Stealth")
        int playerBuffTurns = 0; // Number of turns left for player buff

        string enemyBuff = ""; // Buff affecting enemy (e.g. "Poison", "Stun")
        int enemyBuffTurns = 0; // Number of turns left for enemy buff

        // Other game variables
        bool EnemyTurn; // Flag indicating whether it is the enemy's turn
        Random rnd = new Random(); // Random number generator

        public Game(string name, string @class)
        {
            InitializeComponent();

            // Initialize player and enemy stats
            playerName = name;
            playerClass = @class;
            playerLevel = 1;
            playerMaxHP = GetMaxHP();
            playerHP = playerMaxHP;
            playerMaxMP = GetMaxMP();
            playerMP = playerMaxMP;
            playerAttack = GetAttack();
            playerDefense = GetDefense();
            playerEvasion = GetEvasion();

            enemyLevel = 1;
            enemyMaxHP = GetMaxEnemyHP();
            enemyHP = enemyMaxHP;
            enemyAttack = GetEnemyAttack();
            enemyDefense = GetEnemyDefense();
            enemyEvasion = GetEnemyEvasion();

            // Display initial stats
            DisplayStats();
        }

        // Helper methods to calculate player and enemy stats
        private int GetMaxHP()
        {
            switch (playerClass)
            {
                case "Warrior":
                    return 100 + playerLevel * 10;
                case "Mage":
                    return 75 + playerLevel * 7;
                case "Rogue":
                    return 90 + playerLevel * 9;
                default:
                    return 100 + playerLevel * 10;
            }
        }

        private int GetMaxMP()
        {
            switch (playerClass)
            {
                case "Warrior":
                    return 25 + playerLevel * 5;
                case "Mage":
                    return 100 + playerLevel * 10;
                case "Rogue":
                    return 50 + playerLevel * 7;
                default:
                    return 25 + playerLevel * 5;
            }
        }

        private int GetAttack()
        {
            switch (playerClass)
            {
                case "Warrior":
                    return 20 + playerLevel * 2;
                case "Mage":
                    return 10 + playerLevel * 1;
                case "Rogue":
                    return 15 + playerLevel * 2;
                default:
                    return 20 + playerLevel * 2;
            }
        }

        private int GetDefense()
        {
            switch (playerClass)
            {
                case "Warrior":
                    return 15 + playerLevel * 2;
                case "Mage":
                    return 5 + playerLevel * 1;
                case "Rogue":
                    return 10 + playerLevel * 2;
                default:
                    return 15 + playerLevel * 2;
            }
        }

        private int GetEvasion()
        {
            switch (playerClass)
            {
                case "Warrior":
                    return 5 + playerLevel * 1;
                case "Mage":
                    return 10 + playerLevel * 2;
                case "Rogue":
                    return 15 + playerLevel * 2;
                default:
                    return 5 + playerLevel * 1;
            }
        }

        private int GetMaxEnemyHP()
        {
            return 50 + enemyLevel * 10;
        }

        private int GetEnemyAttack()
        {
            return 10 + enemyLevel * 2;
        }

        private int GetEnemyDefense()
        {
            return 5 + enemyLevel * 1;
        }

        private int GetEnemyEvasion()
        {
            return 5 + enemyLevel * 1;
        }

        // Helper method to display player and enemy stats
        private void DisplayStats()
        {
            // Player stats
            labelPlayerName.Text = "Name: " + playerName;
            labelPlayerClass.Text = "Class: " + playerClass;
            labelPlayerLevel.Text = "Level: " + playerLevel;
            labelPlayerHP.Text = "HP: " + playerHP + "/" + playerMaxHP;
            labelPlayerMP.Text = "MP: " + playerMP + "/" + playerMaxMP;
            labelPlayerAttack.Text = "Attack: " + playerAttack;
            labelPlayerDefense.Text = "Defense: " + playerDefense;
            labelPlayerEvasion.Text = "Evasion: " + playerEvasion;

            // Enemy stats
            labelEnemyLevel.Text = "Level: " + enemyLevel;
            labelEnemyHP.Text = "HP: " + enemyHP + "/" + enemyMaxHP;
            labelEnemyAttack.Text = "Attack: " + enemyAttack;
            labelEnemyDefense.Text = "Defense: " + enemyDefense;
            labelEnemyEvasion.Text = "Evasion: " + enemyEvasion;
        }

        // Helper method to check if an attack hits or misses
        private bool AttackHits(int attackerEvasion, int defenderEvasion)
        {
            int hitChance = rnd.Next(1, 101); // Random number between 1 and 100
            int hitThreshold = 80 + attackerEvasion - defenderEvasion; // Hit threshold based on attacker and defender evasion

            return hitChance <= hitThreshold; // True if hit chance is less than or equal to hit threshold
        }

        // Helper method to calculate damage dealt
        private int CalculateDamage(int attackerAttack, int defenderDefense)
        {
            int damage = attackerAttack - defenderDefense; // Damage is the difference between attacker's attack and defender's defense
            if (damage < 0) damage = 0; // Damage can't be negative

            return damage;
        }

        // Helper method to check if a critical hit occurs
        private bool CriticalHit()
        {
            int critChance = rnd.Next(1, 101); // Random number between 1 and 100

            return critChance <= 10; // True if crit chance is less than or equal to 10 (10% chance of critical hit)
        }

        // Helper method to calculate critical hit damage
        private int CalculateCriticalHitDamage(int damage)
        {
            return damage * 2; // Double damage for critical hit
        }

        // Helper method to calculate experience gained
        private int CalculateExperience(int enemyLevel)
        {
            return enemyLevel * 10; // Experience gained is 10 times enemy's level
        }
       
        // Helper method to level up player
        private void LevelUp()
        {
            playerLevel++; // Increase player's level by 1
            playerMaxHP += 10; // Increase player's max HP by 10
            playerMaxMP += 5; // Increase player's max MP by 5
            playerAttack += 2; // Increase player's attack by 2
            playerDefense += 2; // Increase player's defense by 2
            playerEvasion += 2; // Increase player's evasion by 2
            playerHP = playerMaxHP; // Restore player's HP to full
            playerMP = playerMaxMP; // Restore player's MP to full

            MessageBox.Show("Congratulations, you have leveled up to level " + playerLevel + "!", "Level Up");
        }

        // Helper method to check if player is dead
        private bool IsPlayerDead()
        {
            return playerHP <= 0; // True if player's HP is less than or equal to 0
        }

        // Helper method to check if enemy is dead
        private bool IsEnemyDead()
        {
            return enemyHP <= 0; // True if enemy's HP is less than or equal to 0
        }

        // Helper method to end the game
        private void EndGame()
        {
            if (IsPlayerDead()) // Player is dead, display game over message
            {
                MessageBox.Show("You have been defeated by the enemy. Game over.", "Game Over");
            }
            else // Enemy is dead, display victory message and award experience
            {
                int experienceGained = CalculateExperience(enemyLevel); // Calculate experience gained
                playerExperience += experienceGained; // Add experience to player's total
                DisplayStats(); // Update player and enemy stats

                MessageBox.Show("You have defeated the enemy and gained " + experienceGained + " experience!", "Victory");

                if (playerExperience >= playerExperienceNeeded) // Player has gained enough experience to level up
                {
                    LevelUp(); // Level up player
                }
            }

            // Reset game variables to default values
            playerHP = playerMaxHP;
            playerMP = playerMaxMP;
            enemyHP = enemyMaxHP;
            playerExperienceNeeded = playerLevel * 100;
            enemyLevel = rnd.Next(1, 6);
            enemyMaxHP = GetMaxEnemyHP();
            enemyAttack = GetEnemyAttack();
            enemyDefense = GetEnemyDefense();
            enemyEvasion = GetEnemyEvasion();
        }

        // Helper method to simulate enemy attack
        private void EnemyAttack()
        {
            if (AttackHits(enemyEvasion, playerEvasion)) // Enemy attack hits player
            {
                int damage = CalculateDamage(enemyAttack, playerDefense); // Calculate damage dealt
                if (CriticalHit()) // Critical hit occurs
                {
                    damage = CalculateCriticalHitDamage(damage); // Calculate critical hit damage
                    MessageBox.Show("The enemy lands a critical hit!", "Critical Hit");
                }

                playerHP -= damage; // Reduce player's HP by damage
                DisplayStats(); // Update player and enemy stats

                if (IsPlayerDead()) // Player is dead, end game
                {
                    EndGame();
                }
                else // Player is still alive
                {
                    MessageBox.Show("The enemy attacks you and deals " + damage + " damage!", "Enemy Attack");
                }
            }
            else // Enemy attack misses player
            {
                MessageBox.Show("The enemy attacks you but misses!", "Enemy Attack");
            }
        }

        // Helper method to calculate experience gained
        private int CalculateExperience(int enemyLevel)
        {
            int baseExp = 100;
            int expRange = 50;

            int levelDiff = enemyLevel - playerLevel;
            if (levelDiff < -5)
            {
                levelDiff = -5;
            }
            else if (levelDiff > 5)
            {
                levelDiff = 5;
            }

            int exp = baseExp + expRange * levelDiff;
            if (exp < 0)
            {
                exp = 0;
            }

            return exp;
        }
    }
}